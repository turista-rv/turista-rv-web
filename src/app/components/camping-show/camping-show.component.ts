import { api } from './../../../api';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Camping } from 'src/app/models/camping.model';
import { CAMPINGS } from 'src/app/utils/CAMPINGS';

@Component({
  selector: 'app-camping-show',
  templateUrl: './camping-show.component.html',
  styleUrls: ['./camping-show.component.css'],
})
export class CampingShowComponent {
  campings: Camping[] = [];
  constructor(
    private http: HttpClient,
  ) { }

  ngOnInit(): void {
    this.http.get<Camping[]>(api.url + "/campings").subscribe({

      next: (data: Camping[]) => {
        // Atualiza a lista de campings com os dados recebidos da API
        this.campings = data;
      }
    }),
      (error:any) => {
        console.error('Erro ao obter a lista de campings:', error);
      }
  }
}
