import { Injectable } from '@angular/core';
import axios, { AxiosResponse } from 'axios';
import { BehaviorSubject, from, Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { AUTH_ENDPOINTS } from './auth-endpoints';
import { UserWithSettingsType } from '../user/user-with-settings.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLogin: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  endpoints = AUTH_ENDPOINTS;
  googleAuthUrl = `${environment['BACKEND_URL']}/${this.endpoints.googleAuth}`;

  constructor() {}

  verify(): Observable<AxiosResponse<UserWithSettingsType>> {
    return from(
      axios.get(`${environment['BACKEND_URL']}/${this.endpoints.verify}`, {
        withCredentials: true,
      })
    );
  }
}
