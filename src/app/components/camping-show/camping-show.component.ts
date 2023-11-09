import { api } from './../../../api';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Camping } from 'src/app/models/camping.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-camping-show',
  templateUrl: './camping-show.component.html',
  styleUrls: ['./camping-show.component.css'],
})
export class CampingShowComponent {
  campings: Camping[] = [];
  constructor(
    private http: HttpClient,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.http.get<Camping[]>(api.url + "/campings").subscribe({
      next: (data: Camping[]) => {
        this.campings = data;
      }
    }),
      (error:any) => {
        console.error('Erro ao obter a lista de campings:', error);
      }
  }
  
  redirectToCampingDetails(campingId: string): void {
    // Redirecione para a rota de detalhes do camping com o ID como parâmetro
    this.router.navigate(['/campings', campingId]);
  }
}
