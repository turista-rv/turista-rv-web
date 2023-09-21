import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  {

  // constructor(private renderer: Renderer2, private el: ElementRef) {}
  // ngOnInit(): void {
  //   const mobileMenuButton = document.getElementById("mobile-menu-button");
  //   const mobileMenu = document.getElementById("mobile-menu");
  //   const spaceX3Div = document.querySelector(".space-x-3") as HTMLElement; 
  //   if (mobileMenuButton && mobileMenu) {
  //     mobileMenuButton.addEventListener("click", () => {
  //       console.log('botao clicado')
  //       mobileMenu.classList.toggle("hidden");
  
  //       // Verificar se a tela é móvel e ocultar a div space-x-3, se necessário
  //       if (window.innerWidth <= 768) { 
  //         spaceX3Div.style.display = "none";
  //       } else {
  //         spaceX3Div.style.display = "flex"; 
  //       }
  //     });
  //   }
  // }  

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
