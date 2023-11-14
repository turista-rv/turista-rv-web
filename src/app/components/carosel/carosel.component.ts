import { Component, OnInit, Input } from '@angular/core';
import { Image } from 'src/app/models/image.model';

@Component({
  selector: 'app-carousel',
  templateUrl: './carosel.component.html',
  styleUrls: ['./carosel.component.css'],
})
export class CaroselComponent implements OnInit {
  currentIndex = 0;
  @Input() items: Image[] = [];
  currentImage: Image = this.items[0];

  ngOnInit(): void {}

  prev(): void {
    this.currentIndex =
      (this.currentIndex - 1 + this.items.length) % this.items.length;
    this.currentImage = this.items[this.currentIndex];
  }

  next(): void {
    this.currentIndex = (this.currentIndex + 1) % this.items.length;
    this.currentImage = this.items[this.currentIndex];
  }
}
