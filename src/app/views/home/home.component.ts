import { Leads } from './../../models/LeadsUser.model';
import { LeadsService } from './../../services/leads.service';
import { Component, AfterViewInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private leadsService: LeadsService) { }

  searchTerm: string = ''; // Variável para armazenar o termo de pesquisa
  cards: any[] = [/* Seus dados de cards aqui */];

  leads: Leads = {
    name: '',
    email: '',
    phone: '',
  }

  name: string = '';
  email: string = '';
  phone: string = '';

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

  submitForm() {
    console.log("chegou aqui!" + this.leads.name + this.leads.email + this.leads.phone)
    if (this.leads.name && this.leads.email && this.leads.phone) {
      this.leadsService.sendLeads(this.leads).subscribe(
        (response) => {
          
          console.log("chegou aqui!" + response)
          alert('Dados enviados com sucesso!');
          console.log('Resposta da API:', response);
         
        },
        (error) => {
          alert('Erro ao enviar dados: ' + error.message);
          console.error('Erro da API:', error);
        }
      );
    } else {
      alert('Por favor, preencha todos os campos.', );
    }
  }

}