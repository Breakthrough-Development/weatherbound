import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SettingsService } from '../settings/settings.service';
import { ForecastService } from '../forecast/forecast.service';

interface SearchForm {
  search: FormControl<string>;
}

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  isDisable = this.settingsService.areInputsDisable.value;
  searchForm = new FormGroup<SearchForm>({
    search: new FormControl<string>('', { nonNullable: true }),
  });

  constructor(
    private readonly settingsService: SettingsService,
    private readonly forecastService: ForecastService
  ) {}

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
