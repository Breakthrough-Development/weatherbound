import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth/auth.service';
import { UserService } from './services/user/user.service';
import { UserInterface } from './services/user/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'results-summary-component';
  isLogin = false;
  user: UserInterface | null = null;
  loginUrl = this.authService.googleAuthUrl;

  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService
  ) {}

  ngOnInit(): void {
    // Verify user
    this.authService.verify().subscribe({
      next: (response) => {
        console.log('User:', response);
        this.userService.user.next(response.data);
        this.isLogin = true;
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
