import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { SettingsService } from './settings.service';
import { UserService } from '../../services/user/user.service';
import { SettingsFormInterface } from './models/settings-form.interface';
import { getControlName } from '../../utility/get-control-name.utility';
import { isKeyOfSettingsFormInterface } from './models/is-key-of-settings-form-interface.type';
import { AuthService } from '../../services/auth/auth.service';

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
  isMissingSettings = true;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly settingsService: SettingsService,
    private readonly userService: UserService,
    private readonly authService: AuthService
  ) {
    this.settingsForm = new FormGroup<SettingsFormInterface>({
      weatherApiUrl: new FormControl<string>('', {
        nonNullable: true,
      }),
      apiKey: new FormControl<string>('', { nonNullable: true }),
    });
    this.settingsService.missingValues.subscribe({
      next: (value) => {
        this.isMissingSettings = !!value.length;
      },
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

      for (let key in value) {
        if (isKeyOfSettingsFormInterface(key) && value[key] != null) {
          this.settingsForm.patchValue({ [key]: value[key] });
          console.log(`key: ${key} has been updated`);
        }
      }
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
        error: (err) => {
          console.error('fail submit', err);
          this.userService.user.next(null);
          this.authService.isLogin.next(false);
        },
      });
  }

  closeSettings(): void {
    this.settingsService.showSettings.next(false);
  }
}
