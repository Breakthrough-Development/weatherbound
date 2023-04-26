import { SettingsInterface } from '../settings/settings.model';
import { UserInterface } from './user.model';

export type UserWithSettingsType = UserInterface & {
  settings: SettingsInterface;
};
