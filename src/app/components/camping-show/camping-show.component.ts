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

  ngOnInit(): void {
    // TODO req ao backend para carregar ao camping
    this.campings = CAMPINGS;
  }
}
