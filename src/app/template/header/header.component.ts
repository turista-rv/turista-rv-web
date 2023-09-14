import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
    const mobileMenuButton = document.getElementById("mobile-menu-button");
    const mobileMenu = document.getElementById("mobile-menu");
    const spaceX3Div = document.querySelector(".space-x-3") as HTMLElement; 
    if (mobileMenuButton && mobileMenu) {
      mobileMenuButton.addEventListener("click", () => {
        mobileMenu.classList.toggle("hidden");
  
        // Verificar se a tela é móvel e ocultar a div space-x-3, se necessário
        if (window.innerWidth <= 768) { // Defina a largura de tela desejada para considerar como móvel
          spaceX3Div.style.display = "none";
        } else {
          spaceX3Div.style.display = "flex"; // Ou defina o estilo desejado para mostrar a div
        }
      });
    }
  }  
}
