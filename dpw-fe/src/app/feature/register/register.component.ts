import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormsModule,} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
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
