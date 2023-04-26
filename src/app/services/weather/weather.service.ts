import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import axios, { AxiosResponse } from 'axios';
import { environment } from '../../../environments/environment';
import { WEATHER_ENDPOINTS } from './weather-endpoints';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  endpoints = WEATHER_ENDPOINTS;

  constructor() {}

  forecast(): Observable<AxiosResponse<UserWithSettingsType>> {
    return from(
      axios.get(`${environment['BACKEND_URL']}/${this.endpoints.forecast}`, {
        withCredentials: true,
      })
    );
  }

  current(query: string): Observable<AxiosResponse<any>> {
    return from(
      axios.get(
        `${environment['BACKEND_URL']}/${this.endpoints.current}?query=${query}`,
        {
          withCredentials: true,
        }
      )
    );
  }
}
