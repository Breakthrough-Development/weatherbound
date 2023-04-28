import { Component, HostBinding, OnInit } from '@angular/core';
import { AuthService } from './services/auth/auth.service';
import { UserService } from './services/user/user.service';
import { ForecastService } from './main/forecast/forecast.service';
import { SettingsService } from './main/settings/settings.service';
import { InstructionsService } from './main/instructions/instructions.service';

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
  showInstructions = this.instructionsService.showInstructions.value;
  isSettings = this.settingsService.showSettings.value;
  @HostBinding('class') hostClasses =
    'bg-indigo-100 min-h-screen grid grid-rows-[auto_1fr_auto] grid-cols-1 justify-center';

  constructor(
    private readonly authService: AuthService,
    private readonly settingsService: SettingsService,
    private readonly userService: UserService,
    private readonly weatherService: ForecastService,
    private readonly instructionsService: InstructionsService
  ) {}

  ngOnInit(): void {
    this.instructionsService.showInstructions.subscribe(
      (value) => (this.showInstructions = value)
    );
    this.settingsService.showSettings.subscribe(
      (value) => (this.isSettings = value)
    );
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
