import { Injectable } from '@angular/core';
import { BehaviorSubject, from, Observable } from 'rxjs';
import { SETTINGS_ENDPOINTS } from './settings.endpoints';
import { UserInterface } from '../../services/user/user.model';
import axios, { AxiosResponse } from 'axios';
import { environment } from '../../../environments/environment';
import { SettingsInterface } from './models/settings.interface';

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  endpoints = SETTINGS_ENDPOINTS;
  showSettings: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  areInputsDisable: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );
  userSettings: BehaviorSubject<SettingsInterface | null> =
    new BehaviorSubject<SettingsInterface | null>(null);
  constructor() {}

  getSettings(): Observable<AxiosResponse<SettingsInterface>> {
    return from(
      axios.get(`${environment['BACKEND_URL']}/${this.endpoints.getSettings}`, {
        withCredentials: true,
      })
    );
  }

  updateSettings(
    user: UserInterface,
    settings: Partial<SettingsInterface>
  ): Observable<AxiosResponse<SettingsInterface>> {
    return from(
      axios.post(
        `${environment['BACKEND_URL']}/${this.endpoints.updateSettings}`,
        settings,
        {
          withCredentials: true,
        }
      )
    );
  }
}
