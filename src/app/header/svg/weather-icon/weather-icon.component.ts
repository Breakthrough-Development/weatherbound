import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'svg-weather-icon',
  templateUrl: './weather-icon.component.html',
  styleUrls: ['./weather-icon.component.css'],
})
export class WeatherIconComponent {
  @HostBinding('class') hostClasses = 'inline-block';
}
