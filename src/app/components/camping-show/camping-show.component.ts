import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Camping } from 'src/app/models/camping.model';
import { SkeletonService } from '../skeleton/skeleton.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-camping-show',
  templateUrl: './camping-show.component.html',
  styleUrls: ['./camping-show.component.css'],
})
export class CampingShowComponent {
  @Input() set data(value: Camping[]) {
    this.campingBCKP = value;
    if (this.isMobile) {
      this.campings = value.slice(0, 3);
    } else {
      this.campings = value.slice(0, 6);
    }
  }
  isMobile: boolean = false;
  campings: Camping[] = [];
  campingBCKP: Camping[] = [];
  constructor(
    private router: Router,
    public skeleton: SkeletonService,
    private breakpoint: BreakpointObserver
  ) {}

  ngOnInit(): void {
    this.breakpoint.observe([Breakpoints.XSmall]).subscribe((result) => {
      console.log(result);
      if (result.matches) {
        this.isMobile = true;
        this.campings = this.campingBCKP.slice(0, 3);
      } else {
        this.isMobile = false;
        this.campings = this.campingBCKP.slice(0, 6);
      }
    });
  }

  redirectToCampingDetails(campingId: string | undefined): void {
    this.router.navigate(['/campings', campingId]);
  }
}
