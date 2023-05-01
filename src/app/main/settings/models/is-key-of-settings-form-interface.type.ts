// Type guard function
import { SettingsFormInterface } from './settings-form.interface';
import { FormControl, FormGroup } from '@angular/forms';

export function isKeyOfSettingsFormInterface(
  key: string
): key is keyof SettingsFormInterface {
  const allowedKeys = Object.keys(
    new FormGroup<SettingsFormInterface>({
      weatherApiUrl: new FormControl<string>('', { nonNullable: true }),
      apiKey: new FormControl<string>('', { nonNullable: true }),
    }).controls
  ) as (keyof SettingsFormInterface)[];

  return allowedKeys.includes(key as keyof SettingsFormInterface);
}
