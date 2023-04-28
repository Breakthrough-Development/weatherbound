import { Injectable } from '@angular/core';
import { BehaviorSubject, from, Observable } from 'rxjs';
import axios, { AxiosResponse } from 'axios';
import { environment } from '../../../environments/environment';
import { WEATHER_ENDPOINTS } from './weather-endpoints';
import { CurrentDataInterface } from './models/current-data.interface';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  endpoints = WEATHER_ENDPOINTS;
  currentData: BehaviorSubject<CurrentDataInterface | null> =
    new BehaviorSubject<CurrentDataInterface | null>(null);

  constructor() {}

  forecast(query: string): Observable<AxiosResponse<any>> {
    return from(
      axios.get(
        `${environment['BACKEND_URL']}/${this.endpoints.forecast}?query=${query}`,
        {
          withCredentials: true,
        }
      )
    );
  }

  autocomplete(query: string): Observable<AxiosResponse<any>> {
    return from(
      axios.get(
        `${environment['BACKEND_URL']}/${this.endpoints.autocomplete}?query=${query}`,
        {
          withCredentials: true,
        }
      )
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
