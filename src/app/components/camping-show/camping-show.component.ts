import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Camping } from 'src/app/models/camping.model';
import { CampingService } from 'src/app/services/camping.service';
import { LoadingService } from '../loading/loading.service';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-camping-show',
  templateUrl: './camping-show.component.html',
  styleUrls: ['./camping-show.component.css'],
})
export class CampingShowComponent {
  campings: Camping[] = [];
  constructor(
    private campingService: CampingService,
    private router: Router,
    private _loading: LoadingService
  ) {}

  ngOnInit(): void {
    this._loading.start();
    this.campingService
      .listCampings()
      .pipe(
        finalize(() => {
          this._loading.stop();
        })
      )
      .subscribe((data) => {
        this.campings = data;
      });
  }

  redirectToCampingDetails(campingId: string): void {
    // Redirecione para a rota de detalhes do camping com o ID como parâmetro
    this.router.navigate(['/campings', campingId]);
  }
}
