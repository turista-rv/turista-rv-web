import { Component, ElementRef, Renderer2, HostListener } from '@angular/core';
import { Leads } from './../../models/LeadsUser.model';
import { LeadsService } from './../../services/leads.service';
import { CategoryService } from 'src/app/services/category.service';
import { TypeCategory } from 'src/app/models/category.model';

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
  constructor(
    private leadsService: LeadsService,
    private _categoryService: CategoryService,
    private elRef: ElementRef,
    private renderer: Renderer2
  ) {}

  selectionDate!: any;
  dataEntrada!: Date;
  dataSaida!: Date;
  activeTab: number = 0;
  showCalendar: boolean = false;
  selectedDates: Date[] = [];

  searchTerm: string = '';
  cards: any[] = [];

  leads: Leads = {
    name: '',
    email: '',
    phone: '',
  };

  name: string = '';
  email: string = '';
  phone: string = '';

  isDropdownVisible: boolean = false;

  ngOnInit() {
    document.addEventListener('click', (event) =>
      this.handleDocumentClick(event)
    );

    this._categoryService
      .listByType(TypeCategory.CAMPING)
      .subscribe((categories) => {
        categories.forEach((category) => {
          this.tabs.push({ title: category.name, content: '' });
        });
      });
  }

  ngOnDestroy() {
    document.removeEventListener('click', (event) =>
      this.handleDocumentClick(event)
    );
  }

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

  searchCampings(): void {
    const queryParams: any = {};
    if (this.dataEntrada && this.dataSaida) {
      queryParams.start = this.getFormatedDate(this.dataEntrada);
      queryParams.end = this.getFormatedDate(this.dataSaida);
    }
    if (this.searchTerm) {
      queryParams.search = this.searchTerm;
    }
  }

  onSelectDate(event: any) {
    this.dataEntrada = this.selectedDates[0];
    this.dataSaida = this.selectedDates[this.selectedDates.length - 1];

    if (this.dataEntrada && this.dataSaida) {
      this.showCalendar = false;
    }
  }

  getFormatedDate(date: Date): string {
    return `${date.getDate().toString().padStart(2, '0')}/${(
      date.getMonth() + 1
    )
      .toString()
      .padStart(2, '0')}/${date.getFullYear()}`;
  }

  @HostListener('document:click', ['$event'])
  handleDocumentClick(event: Event): void {
    if (!this.elRef.nativeElement.contains(event.target)) {
      this.showCalendar = false;
    }
  }

  toggleCalendar(): void {
    this.showCalendar = !this.showCalendar;
  }

  activeTabClass: string = '0';

  tabs: Tab[] = [];

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
