import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-camping',
  templateUrl: './camping.component.html',
  styleUrls: ['./camping.component.css'],
})
export class CampingComponent {
  @Input() url: string = '';
  @Input() title: string = '';
}
