import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  user = { email: '', password: '', password_confirmation: '' };

  constructor(private authService: AuthService) {}

  register() {
    this.authService.register({ user: this.user }).subscribe(response => {
      console.log('User registered successfully', response);
    });
  }
}
