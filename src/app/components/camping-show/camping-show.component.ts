import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { debounceTime, delay, finalize } from 'rxjs';
import { Camping } from 'src/app/models/camping.model';
import { CampingService } from 'src/app/services/camping.service';
import { SkeletonService } from '../skeleton/skeleton.service';

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
    private skeleton: SkeletonService
  ) {}

  ngOnInit(): void {
    this.skeleton.start();
    this.campingService
      .listCampings()
      .pipe(
        finalize(() => {
          this.skeleton.stop();
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
