import { Component, OnInit, AfterViewInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { RULES } from 'src/app/utils/rules-enum';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Camping } from 'src/app/models/camping.model';
import { CampingService } from 'src/app/services/camping.service';
import { ActivatedRoute } from '@angular/router';
/// <reference types="@types/googlemaps" />
declare const google: any;

interface Rule {
  name: string;
  code: string;
  icon: string;
}

@Component({
  selector: 'app-camping-search',
  templateUrl: './camping-search.component.html',
  styleUrls: ['./camping-search.component.scss'],
})
export class CampingSearchComponent implements OnInit, AfterViewInit {
  camping: Camping[] = [];
  sortOptions!: SelectItem[];
  rules: Rule[] = RULES;

  sortOrder!: number;
  sortField!: string;
  sortKey: any;
  rangeValues: number[] = [0, 50];
  selectedCategory = 'all';
  isSmallScreen = false;
  showFilters = false;
  showFiltersButton = true;
  searchTerm: string = '';

  ratingValue = 4;
  category = 'Smart Camping';

  constructor(
    private campingService: CampingService,
    private breakpointObserver: BreakpointObserver,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.loadCampings();
    this.sortOptions = [
      { label: 'Menor preço', value: '!baseValue' },
      { label: 'Maior preço', value: 'baseValue' },
      { label: 'Distância', value: '' },
    ];

    this.breakpointObserver
      .observe([Breakpoints.Small, Breakpoints.XSmall])
      .subscribe((result) => {
        this.isSmallScreen = result.matches;
      });

    if (typeof google !== 'undefined' && typeof google.maps !== 'undefined') {
      this.initMap();
    }

    // Verificar se existem parâmetros na URL
    this.route.queryParams.subscribe((params) => {
      const startDate = params['start'];
      const endDate = params['end'];
      this.searchTerm = params['search'];

      if (this.searchTerm) {
        this.filterCards();
      }
    });
  }

  loadCampings(): void {
    this.campingService.listCampings().subscribe((data: Camping[]) => {
      if (data.length > 0) {
        this.camping = data;
      }
    });
  }

  toggleFilters(): void {
    this.showFilters = !this.showFilters;
    if (this.showFilters) {
      this.isSmallScreen ? (this.showFiltersButton = false) : (this.showFiltersButton = false);
    }
  }

  closeFiltersButton(): void {
    this.showFilters = !this.showFilters;
    this.showFiltersButton = false;
    this.showFiltersButton = true;
  }

  selectCategory(category: string): void {
    this.selectedCategory = category;
    this.loadCampings();
  }

  onCategoryChange(): void {
    this.loadCampings();
  }

  onPriceChange(): void {
    this.loadCampings();
  }

  onSortChange(event: any): void {
    const value = event.value;

    if (value.indexOf('!') === 0) {
      this.sortOrder = -1;
      this.sortField = value.substring(1, value.length);
    } else {
      this.sortOrder = 1;
      this.sortField = value;
    }
  }

  getRules(camping: Camping): Rule[] {
    const ruleCodes = camping.propertyRules.slice(0, 4);
    return camping?.propertyRules?.length > 0 ? RULES.filter((r) => camping.propertyRules.includes(r.code)) : [];
  }

  // Mini mapa Google
  initMap(): void {
    const mapOptions = {
      center: { lat: -27.5969, lng: 48.5495 }, // Coordenadas iniciais
      zoom: 8, // Nível de zoom inicial
    };

    const map = new google.maps.Map(document.getElementById('miniMap'), mapOptions);
  }

  // Inicializa o mapa quando a página for carregada
  ngAfterViewInit(): void {
    this.initMap();
  }

  filterCards(): void {
    // Implemente a lógica de filtro de cards com base em this.searchTerm
  }
  
}
