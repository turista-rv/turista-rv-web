import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Camping } from 'src/app/models/camping.model';
import { SkeletonService } from '../skeleton/skeleton.service';

@Component({
  selector: 'app-camping-show',
  templateUrl: './camping-show.component.html',
  styleUrls: ['./camping-show.component.css'],
})
export class CampingShowComponent {
  @Input() set data(value: Camping[]) {
    this.campings = value;
  }
  campings: Camping[] = [];
  constructor(private router: Router, public skeleton: SkeletonService) {}

  ngOnInit(): void {}

  redirectToCampingDetails(campingId: string | undefined): void {
    this.router.navigate(['/campings', campingId]);
  }
}
