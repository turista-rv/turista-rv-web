import { Leads } from './../../models/LeadsUser.model';
import { LeadsService } from './../../services/leads.service';
import { Component, AfterViewInit } from '@angular/core';

interface ImageInfo {
  imageFileName: string;
  imageTitle: string;
}

interface Tab {
  title: string;
  content: string;
  images?: ImageInfo[];
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private leadsService: LeadsService) { }

  activeTab: number = 0;

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


  //METODO ABAS INTERATIVAS 

  activeTabClass: string = '0';


  tabs: Tab[] = [
    {
      title: 'Campings',
      content: 'Encontre o melhor lugar com conforto e segurança!  ',
      images: [
        {
          imageFileName: 'pomerode.jpg',
          imageTitle: 'Pomerode'
        },
        {
          imageFileName: 'pomerode.jpg',
          imageTitle: 'Título da Segunda Imagem'
        },
        {
          imageFileName: 'pomerode.jpg',
          imageTitle: 'Título da Terceira Imagem'
        },
        // {
        //   imageFileName: 'pomerode.jpg',
        //   imageTitle: 'Título da Terceira Imagem'
        // },
      ]
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


  changeTab(index: number): void {
    console.log('Changing tab to index:', index);
    this.activeTab = index;
  }




  submitForm() {
    if (this.leads.name && this.leads.email && this.leads.phone) {
      this.leadsService.sendLeads(this.leads).subscribe(
        (response) => {
          alert('Dados enviados com sucesso!');
        },
        (error) => {
          alert('Erro ao enviar dados: ' + error.message);
          console.error('Erro da API:', error);
        }
      );
    } else {
      alert('Por favor, preencha todos os campos.',);
    }
  }

}