import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Importe o Router para redirecionar após o login
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  credentials = {
    email: '',
    password: ''
  };

  constructor(
    private authService: AuthService,
    private router: Router 
  ) { }

  onSubmit() {
	
    this.authService
      .loginUser(this.credentials)
      .subscribe((isLogged) => {
        if (isLogged) {
          this.router.navigateByUrl('/'); 
        } else {
          console.error('Email ou senha incorretos.');
        }
      });
  }
}
