import { Component, HostBinding, OnInit } from '@angular/core';
import { AuthService } from './services/auth/auth.service';
import { UserService } from './services/user/user.service';
import { WeatherService } from './services/weather/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'results-summary-component';
  isLogin = this.authService.isLogin.value;
  loginUrl = this.authService.googleAuthUrl;
  user = this.userService.user.value;
  showInstructions = true; // todo: default is false
  isSettings = false; // todo: default is false
  @HostBinding('class') hostClasses =
    'bg-indigo-100 min-h-screen grid grid-rows-[auto_1fr_auto] grid-cols-1 justify-center';

  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService,
    private readonly weatherService: WeatherService
  ) {}

  ngOnInit(): void {
    this.authService.isLogin.subscribe((value) => (this.isLogin = value));
    this.userService.user.subscribe({
      next: (value): void => {
        this.user = value;
      },
    });
    this.authService.verify().subscribe({
      next: (response) => {
        this.userService.user.next(response.data);
        this.authService.isLogin.next(true);
        this.weatherService.current('new york').subscribe({
          next: (value) => {
            this.weatherService.currentData.next(value.data);
            console.log(value.data);
          },
          error: (error) => {
            console.error('Error during the forecast call', error);
          },
        });
      },
      error: (error) => {
        console.error('Error during token verification:', error);
      },
    });
  }

  handleLogout(): void {
    this.isLogin = false;
  }
}
