import { Component, OnInit } from '@angular/core';
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

  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService,
    private readonly weatherService: WeatherService
  ) {}

  ngOnInit(): void {
    this.authService.isLogin.subscribe((value) => (this.isLogin = value));
    // Verify user
    this.authService.verify().subscribe({
      next: (response) => {
        this.userService.user.next(response.data);
        this.isLogin = true;
        this.weatherService.current('new york').subscribe({
          next: (value) => {
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
    this.userService.user.subscribe({
      next: (value): void => {
        this.user = value;
      },
    });
  }

  handleLogout(): void {
    this.isLogin = false;
  }
}
