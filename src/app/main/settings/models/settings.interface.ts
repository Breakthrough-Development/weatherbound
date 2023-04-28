import { UserInterface } from '../../../services/user/user.model';

export interface SettingsInterface {
  id: number;
  apiKey: string;
  weatherApiUrl: string;
  user: UserInterface;
}
