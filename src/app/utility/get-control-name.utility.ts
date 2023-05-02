import { FormControl, FormGroup } from '@angular/forms';

export function getControlName(
  formGroup: FormGroup,
  control: FormControl
): string | null {
  for (const [key, value] of Object.entries(formGroup.controls)) {
    if (value === control) {
      return key;
    }
  }
  return null;
}
