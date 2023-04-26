import { Injectable } from '@angular/core';
import axios, { AxiosResponse } from 'axios';
import { from, Observable } from 'rxjs';
import { UserInterface } from '../user/user.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  endpoints = {
    googleAuth: 'auth/google',
    verify: 'auth/verify',
  };

  constructor() {}

  googleAuthUrl = `${environment['BACKEND_URL']}/${this.endpoints.googleAuth}`;

  verify(): Observable<AxiosResponse<UserInterface>> {
    return from(
      axios.get(`${environment['BACKEND_URL']}/${this.endpoints.verify}`)
    );
  }
}
