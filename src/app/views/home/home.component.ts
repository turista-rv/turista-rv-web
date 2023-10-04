import { Component, AfterViewInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {
  searchTerm: string = ''; // Variável para armazenar o termo de pesquisa
  cards: any[] = [/* Seus dados de cards aqui */];
 


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
}