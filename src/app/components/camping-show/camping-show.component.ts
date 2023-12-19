import { Component, Input } from '@angular/core';
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
  @Input() category: string = '';
  campings: Camping[] = [];
  constructor(
    private campingService: CampingService,
    private router: Router,
    private skeleton: SkeletonService
  ) {}

  ngOnInit(): void {
    this.skeleton.start();
    this.campingService
      .listCampings() //list by category
      .pipe(
        finalize(() => {
          this.skeleton.stop();
        })
      )
      .subscribe((data) => {
        this.campings = data.sort((a, b) => {
          const clickCounterA = a.clickCounter || 0; // Se a.clickCounter for undefined, considera como 0
          const clickCounterB = b.clickCounter || 0; // Se b.clickCounter for undefined, considera como 0

          return clickCounterB - clickCounterA;
        });
      });
  }

  redirectToCampingDetails(campingId: string | undefined): void {
    // Redirecione para a rota de detalhes do camping com o ID como parâmetro

    this.router.navigate(['/campings', campingId]);
  }
}
