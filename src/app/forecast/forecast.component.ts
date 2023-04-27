import { Component, OnInit } from '@angular/core';
import { Data } from './data';
import { DataInterface } from './models/DataInterface';
import { WeatherService } from '../services/weather/weather.service';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css'],
})
export class ForecastComponent implements OnInit {
  currentWeather = this.weatherService.currentData.value;
  data: DataInterface[] = Data;

  constructor(private readonly weatherService: WeatherService) {}

  ngOnInit(): void {
    this.weatherService.currentData.subscribe((value) => {
      this.currentWeather = value;
    });
  }
  // location.name
  // current.temperature
  // current.weather_descriptions[0]
  // current.weather_icon[0]
}
