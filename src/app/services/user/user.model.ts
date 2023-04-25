import { SettingsInterface } from '../settings/settings.model';

export interface UserInterface {
  id: number;
  email: string;
  name: string;
  photo?: string;
  setting?: SettingsInterface;
}
