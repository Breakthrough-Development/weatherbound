import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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
  settingsForm: FormGroup;
  showAPIKey = false;
  isSettings = this.settingsService.showSettings.value;
  isDisable = this.settingsService.areInputsDisable.value;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly settingsService: SettingsService,
    private readonly userService: UserService
  ) {
    this.settingsForm = this.formBuilder.group({
      baseUrl: '',
      weatherApiKey: '',
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

    //  get user settings and populate the settings input with them
    this.settingsService.getSettings().subscribe({
      next: (value) => {
        this.settingsForm.setValue({
          baseUrl: value.data.weatherApiUrl,
          weatherApiKey: value.data.apiKey,
        });
      },
    });
  }

  toggleAPIKeyVisibility() {
    this.showAPIKey = !this.showAPIKey;
  }

  onSubmit(): void {
    console.log(this.settingsForm.value);
    // Perform your update logic here
    if (!this.userService.user.value) return;
    this.settingsService
      .updateSettings(this.userService.user.value, {
        weatherApiUrl: this.settingsForm.get('baseUrl')?.value,
        apiKey: this.settingsForm.get('weatherApiKey')?.value,
      })
      .subscribe({
        next: (value) => console.log('Success submit', value),
        error: (err) => console.error('fail submit', err),
      });
  }

  closeSettings(): void {
    this.settingsService.showSettings.next(false);
  }
}
