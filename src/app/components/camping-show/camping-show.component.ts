import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Camping } from 'src/app/models/camping.model';
import { CampingService } from 'src/app/services/camping.service';

@Component({
  selector: 'app-camping-show',
  templateUrl: './camping-show.component.html',
  styleUrls: ['./camping-show.component.css'],
})
export class CampingShowComponent {
  campings: Camping[] = [];
  constructor(private campingService: CampingService, private router: Router) {}

  ngOnInit(): void {
    this.campingService.listCampings().subscribe((data) => {
      console.log(data);
      this.campings = data;
    });
  }

  redirectToCampingDetails(campingId: string): void {
    // Redirecione para a rota de detalhes do camping com o ID como parâmetro
    this.router.navigate(['/campings', campingId]);
  }
}
