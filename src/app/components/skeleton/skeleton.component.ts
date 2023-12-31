import { Component, Input } from '@angular/core';
import { SkeletonService } from './skeleton.service';

@Component({
  selector: 'app-skeleton',
  templateUrl: './skeleton.component.html',
})
export class SkeletonComponent {
  @Input() mode: 'rectangle' | 'circle' | 'rounded' | 'square' = 'rectangle';
  @Input() height: string = '100%';
  @Input() width: string = '100%';
  @Input() borderRadius: string = '16px';
  @Input() size: string = '2rem';

  constructor(public skeleton: SkeletonService) {}
}
