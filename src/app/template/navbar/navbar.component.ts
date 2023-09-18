import { Component, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isMenuOpen = false;

  constructor(private renderer: Renderer2, private el: ElementRef) {}
 
  ngOnInit() {
  }


  // Função para alternar o estado do menu
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;

    // Se o menu estiver aberto, remova a classe 'hidden', caso contrário, adicione-a
    if (this.isMenuOpen) {
      this.renderer.removeClass(this.el.nativeElement.querySelector('#menuHamburguer'), 'hidden');
    } else {
      this.renderer.addClass(this.el.nativeElement.querySelector('#menuHamburguer'), 'hidden');
    }
  }
}
