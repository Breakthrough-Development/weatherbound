import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SettingsService } from './settings.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],
})
export class SettingsComponent implements OnInit {
  settingsForm: FormGroup;
  showAPIKey = false;
  isSettings = this.settingsService.showSettings.value;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly settingsService: SettingsService
  ) {
    this.settingsForm = this.formBuilder.group({
      baseUrl: '',
      weatherApiKey: '',
    });
  }

  ngOnInit(): void {
    this.settingsService.showSettings.subscribe(
      (value) => (this.isSettings = value)
    );
  }

  toggleAPIKeyVisibility() {
    this.showAPIKey = !this.showAPIKey;
  }

  onSubmit(): void {
    console.log(this.settingsForm.value);
    // Perform your update logic here
  }

  closeSettings(): void {
    this.settingsService.showSettings.next(false);
  }
}
