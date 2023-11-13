import { Component, OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'TuristaRV';

  constructor(private AuthService: AuthService) {}

  ngOnInit(): void {
    if (localStorage.getItem('keepLogged') === 'true') {
      this.AuthService.setIsLoggedIn();
    }
    initFlowbite();
  }
}
