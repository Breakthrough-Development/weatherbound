import { Injectable } from '@angular/core';
import { BehaviorSubject, from, Observable } from 'rxjs';
import axios, { AxiosResponse } from 'axios';
import { environment } from '../../../environments/environment';
import { WEATHER_ENDPOINTS } from './forecast.endpoints';
import { ForecastInterface } from './models/forecast.interface';

@Injectable({
  providedIn: 'root',
})
export class ForecastService {
  endpoints = WEATHER_ENDPOINTS;
  currentData: BehaviorSubject<ForecastInterface | null> =
    new BehaviorSubject<ForecastInterface | null>(null);

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
