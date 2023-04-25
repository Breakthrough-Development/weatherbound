import { UserInterface } from '../user/user.model';

export interface SettingsInterface {
  id: number;
  apiKey: string;
  weatherApiUrl: string;
  user: UserInterface;
}
