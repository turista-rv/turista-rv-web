// navbar.component.ts
import { Component, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  isMenuOpen = false;

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;

    const menuElement = this.el.nativeElement.querySelector('#menuHamburguer');
    if (this.isMenuOpen) {
      // Se o menu estiver aberto, adicione a classe para posicionar abaixo do header
      this.renderer.addClass(menuElement, 'navbar-below-header');
    } else {
      // Se o menu estiver fechado, remova a classe
      this.renderer.removeClass(menuElement, 'navbar-below-header');
    }
  }
}
