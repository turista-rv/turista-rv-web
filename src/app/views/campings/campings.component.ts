import { Component } from '@angular/core';

@Component({
  selector: 'app-campings',
  templateUrl: './campings.component.html',
  styleUrls: ['./campings.component.css']
})
export class CampingsComponent {
  imagens = [
    { src: 'assets/img/campings/pomerode.jpg', alt: 'Camping 1' },
    { src: 'assets/img/campings/pomerode.jpg', alt: 'Camping 2' },
    { src: 'assets/img/campings/pomerode.jpg', alt: 'Camping 3' }
  ];

  currentIndex = 0;

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.imagens.length;
  }

  prevSlide() {
    this.currentIndex = this.currentIndex > 0 ? this.currentIndex - 1 : this.imagens.length - 1;
  }
}
