import { FormControl } from '@angular/forms';

export interface SettingsFormInterface {
  weatherApiUrl: FormControl<string>;
  apiKey: FormControl<string>;
}
