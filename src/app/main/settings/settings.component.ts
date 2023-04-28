import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { SettingsService } from './settings.service';
import { UserService } from '../../services/user/user.service';
import { SettingsFormInterface } from './models/settings-form.interface';
import { getControlName } from './utility/get-control-name.utility';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],
})
export class SettingsComponent implements OnInit {
  settingsForm: FormGroup<SettingsFormInterface>;
  showAPIKey = false;
  isSettings = this.settingsService.showSettings.value;
  isDisable = this.settingsService.areInputsDisable.value;
  getControlName = getControlName;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly settingsService: SettingsService,
    private readonly userService: UserService
  ) {
    this.settingsForm = new FormGroup<SettingsFormInterface>({
      weatherApiUrl: new FormControl<string>('', {
        nonNullable: true,
      }),
      apiKey: new FormControl<string>('', { nonNullable: true }),
    });
  }

  ngOnInit(): void {
    this.settingsService.areInputsDisable.subscribe(
      (value) => (this.isDisable = value)
    );
    this.userService.user.subscribe((user) => {
      if (!user) {
        this.settingsService.areInputsDisable.next(true);
        this.settingsForm.disable();
        return;
      }
      this.settingsService.areInputsDisable.next(false);
      this.settingsForm.enable();
    });
    this.settingsService.showSettings.subscribe(
      (value) => (this.isSettings = value)
    );

    this.settingsService.userSettings.subscribe((value) => {
      if (!value) return;
      this.settingsForm.setValue({
        weatherApiUrl: value.weatherApiUrl || 'http://api.weatherstack.com/',
        apiKey: value.apiKey || 'c46aea0acc96423739c71b056da54ea5',
      });
      console.log(value);
    });
  }

  toggleAPIKeyVisibility() {
    this.showAPIKey = !this.showAPIKey;
  }

  onSubmit(): void {
    console.log(this.settingsForm.value);
    if (!this.userService.user.value) return;
    this.settingsService
      .updateSettings(this.userService.user.value, {
        weatherApiUrl: this.settingsForm.controls.weatherApiUrl.value,
        apiKey: this.settingsForm.controls.apiKey.value,
      })
      .subscribe({
        next: (value) => this.settingsService.userSettings.next(value.data),
        error: (err) => console.error('fail submit', err),
      });
  }

  closeSettings(): void {
    this.settingsService.showSettings.next(false);
  }
}
