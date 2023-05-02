import { Component } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
import { UserService } from '../services/user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  user = this.userService.user.value;
  isLogin = this.authService.isLoggedIn.value;
  loginUrl = this.authService.googleAuthUrl;

  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService
  ) {}

  ngOnInit(): void {
    this.authService.isLoggedIn.subscribe((value) => (this.isLogin = value));
    this.userService.user.subscribe({
      next: (value): void => {
        this.user = value;
      },
    });
  }

  handleLogout(): void {
    // todo: logout user in the backend

    this.authService.logout().subscribe({
      next: (_value) => {
        this.authService.isLoggedIn.next(false);
        this.userService.user.next(null);
      },
      error: (err) => console.log('Error login out: ', err),
    });
  }
}
