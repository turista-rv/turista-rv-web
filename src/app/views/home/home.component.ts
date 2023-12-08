import { Component } from '@angular/core';
import { Leads } from './../../models/LeadsUser.model';
import { LeadsService } from './../../services/leads.service';
import { LoadingService } from 'src/app/components/loading/loading.service';
import { SkeletonService } from 'src/app/components/skeleton/skeleton.service';

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
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor(private leadsService: LeadsService) {}

  activeTab: number = 0;

  searchTerm: string = ''; // Variável para armazenar o termo de pesquisa
  cards: any[] = [
    /* Seus dados de cards aqui */
  ];

  leads: Leads = {
    name: '',
    email: '',
    phone: '',
  };

  name: string = '';
  email: string = '';
  phone: string = '';

  isDropdownVisible: boolean = false;

  toggleDropdown(): void {
    this.isDropdownVisible = !this.isDropdownVisible;
  }

  filterCards() {
    const lowerSearchTerm = this.searchTerm.toLowerCase();
    this.cards.forEach((card) => {
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
      title: 'Pesquisar',
      content: 'Encontre o melhor lugar com conforto e segurança!',
    },
    {
      title: 'Smart Campings TuristaRV',
      content: 'Encontre o melhor lugar com conforto e segurança!',
    },
    {
      title: 'Campings',
      content: 'Conteúdo da Tab 2',
    },
    {
      title: 'Glampings e Chalés',
      content: 'Conteúdo da Tab 3',
    },
    {
      title: 'Experiências Atrações',
      content: 'Conteúdo da Tab 4',
    },
  ];

  scrollTabs(direction: number) {
    const newActiveTab = this.activeTab + direction;
    if (newActiveTab >= 0 && newActiveTab < this.tabs.length) {
      this.activeTab = newActiveTab;
    }
  }

  changeTab(index: number): void {
    console.log('trocou de aba', index);
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
      alert('Por favor, preencha todos os campos.');
    }
  }
}
