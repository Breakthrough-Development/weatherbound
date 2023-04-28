import { UserInterface } from '../../../services/user/user.model';

export interface SettingsInterface {
  id: number;
  apiKey: string | null;
  weatherApiUrl: string | null;
  user: UserInterface;
}
