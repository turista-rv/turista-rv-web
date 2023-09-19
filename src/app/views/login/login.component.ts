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
    username: '',
    password: ''
  };

  constructor(
    private authService: AuthService,
    private router: Router 
  ) { }

  onSubmit() {
	console.log('Botão Entrar clicado.');
    this.authService
      .loginUser(this.credentials)
      .subscribe((isLogged) => {
        if (isLogged) {
          this.router.navigateByUrl('/home'); // Redirecionar para a página de home após o login bem-sucedido
        } else {
          console.error('Email ou senha incorretos.');
        }
      });
  }
}
