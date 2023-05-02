import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SettingsService } from '../settings/settings.service';
import { ForecastService } from '../forecast/forecast.service';
import { SettingsInterface } from '../settings/models/settings.interface';
import { getControlName } from '../../utility/get-control-name.utility';

interface SearchForm {
  search: FormControl<string>;
}

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  searchForm = new FormGroup<SearchForm>({
    search: new FormControl<string>('', { nonNullable: true }),
  });
  getControlName = getControlName;

  constructor(
    private readonly settingsService: SettingsService,
    private readonly forecastService: ForecastService
  ) {}

  ngOnInit(): void {
    this.disableSearch(this.settingsService.userSettings.value);
    this.settingsService.userSettings.subscribe((settings) => {
      this.disableSearch(settings);
    });
  }

  private disableSearch(settings: SettingsInterface | null): void {
    if (
      !settings ||
      !settings?.apiKey ||
      !settings?.weatherApiUrl ||
      this.settingsService.areInputsDisable.value
    ) {
      console.log('Settings are not available');
      this.searchForm.controls.search.disable();
      this.settingsService.showSettings.next(true);
      return;
    }

    console.log('Settings are available');
    this.searchForm.controls.search.enable();
  }
  onSearch() {
    // disable search until key and url are available
    const searchInputValue = this.searchForm.controls.search.value;
    console.log('Search input value:', searchInputValue);
    // Perform search logic here...
    this.forecastService.current(searchInputValue).subscribe({
      next: (value) => {
        this.forecastService.currentData.next(value.data);
      },
      error: (error) => {
        console.error('Error during the forecast call', error);
      },
    });
  }
}
