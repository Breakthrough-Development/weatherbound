import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'results-summary-component';
  isLogin = false;

  handleLogin(login: 'logout' | 'login') {
    this.isLogin = !this.isLogin;
    console.log(login);
  }
}
