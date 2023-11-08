import { Component, OnInit } from '@angular/core';
import { Camping } from 'src/app/models/camping.model';
import { CAMPINGS } from 'src/app/utils/CAMPINGS';

@Component({
  selector: 'app-camping',
  templateUrl: './camping.component.html',
  styleUrls: ['./camping.component.css'],
})
export class CampingComponent implements OnInit {
  campings: Camping[] = [];

  ngOnInit(): void {
    // TODO req ao backend para carregar ao camping
    this.campings = CAMPINGS;
  }
}
