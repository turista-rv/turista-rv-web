import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  {

  isMenuOpen = false;

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  
    const navElement = document.querySelector('nav'); // Selecione o elemento nav corretamente
    if (navElement) {
      // Verifique se o elemento nav foi encontrado
      if (this.isMenuOpen) {
        // Se o menu estiver aberto, adicione a classe 'active' para posicionar corretamente
        navElement.classList.add('active');
      } else {
        // Se o menu estiver fechado, remova a classe 'active'
        navElement.classList.remove('active');
      }
    }
  }
  
}
