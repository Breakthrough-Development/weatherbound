import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { InstructionsService } from './instructions.service';

@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.css'],
})
export class InstructionsComponent implements OnInit {
  showInstructions = this.instructionsService.showInstructions.value;
  isLogin = this.authService.isLogin.value;

  constructor(
    private readonly authService: AuthService,
    private readonly instructionsService: InstructionsService
  ) {}

  ngOnInit(): void {
    this.authService.isLogin.subscribe((value) => (this.isLogin = value));
    this.instructionsService.showInstructions.subscribe(
      (value) => (this.showInstructions = value)
    );
  }
}
