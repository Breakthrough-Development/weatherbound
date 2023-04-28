import { SettingsInterface } from '../../main/settings/models/settings.interface';
import { UserInterface } from './user.model';

export type UserWithSettingsType = UserInterface & {
  settings: SettingsInterface;
};
