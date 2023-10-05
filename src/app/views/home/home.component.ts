import { Component, AfterViewInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  searchTerm: string = ''; // Variável para armazenar o termo de pesquisa
  cards: any[] = [/* Seus dados de cards aqui */];

  isDropdownVisible: boolean = false;

  toggleDropdown(): void {
    this.isDropdownVisible = !this.isDropdownVisible;
  }

  filterCards() {
    const lowerSearchTerm = this.searchTerm.toLowerCase();
    this.cards.forEach(card => {
      const text = card.text.toLowerCase();
      card.hidden = !text.includes(lowerSearchTerm);
    });
  }

  handleDateClick(arg: any) {
    alert('Date clicked: ' + arg.dateStr);
  }

  activeTab: number = 0; // A aba ativa começa do índice 0
  tabs: any[] = [
    {
      title: 'Tab 1',
      content: 'Conteúdo da Tab 1'
    },
    {
      title: 'Tab 2',
      content: 'Conteúdo da Tab 2'
    },
    {
      title: 'Tab 3',
      content: 'Conteúdo da Tab 3'
    },
    {
      title: 'Tab 4',
      content: 'Conteúdo da Tab 4'
    },
    {
      title: 'Tab 5',
      content: 'Conteúdo da Tab 5'
    }
  ];
}