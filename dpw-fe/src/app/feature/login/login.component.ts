import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  credentials = { email: '', password: '' };

  constructor(private authService: AuthService) {}

  login() {
    this.authService.login(this.credentials).subscribe(response => {
      localStorage.setItem('token', response.auth_token);
      console.log('User logged in successfully', response);
    });
  }
}
