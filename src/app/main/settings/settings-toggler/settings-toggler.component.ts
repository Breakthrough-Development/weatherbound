import { Component } from '@angular/core';
import { SettingsService } from '../settings.service';

@Component({
  selector: 'settings-toggler',
  templateUrl: './settings-toggler.component.html',
  styleUrls: ['./settings-toggler.component.css'],
})
export class SettingsTogglerComponent {
  constructor(private readonly settingsService: SettingsService) {}

  openSettings() {
    this.settingsService.showSettings.next(
      !this.settingsService.showSettings.value
    );
  }
}
