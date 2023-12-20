import { Component, OnInit, AfterViewInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { RULES } from 'src/app/utils/rules-enum';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Camping } from 'src/app/models/camping.model';
import { CampingService } from 'src/app/services/camping.service';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { TypeCategory } from 'src/app/models/category.model';
/// <reference types="@types/googlemaps" />
declare const google: any;

interface Rule {
  name: string;
  code: string;
  icon: string;
}

interface CategoryButton {
  id: string;
  label: string;
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
  rangeValues: number[] = [0, 300];
  maxRangeValue: number = 999; 
  selectedCategory = 'all';
  isSmallScreen = false;
  showFilters = false;
  showFiltersButton = true;
  searchTerm: string = '';
  ratingValue = 4;
  categoryButtons: CategoryButton[] = [];

  constructor(
    private campingService: CampingService,
    private breakpointObserver: BreakpointObserver,
    private route: ActivatedRoute,
    private _categoryService: CategoryService,
  ) { }

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
    this.categoryButtons.unshift({ id: 'all', label: 'Todos' });
    this._categoryService
      .listByType(TypeCategory.CAMPING)
      .subscribe((categories) => {
        this.categoryButtons = categories.map(category => ({
          id: category.id as string,
          label: category.name,
        }));
      });
    this.categoryButtons.unshift({ id: 'all', label: 'Todos' });

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
        if (this.selectedCategory !== 'all') {
          data = data.filter(c => c.categories && c.categories.some(cat => cat.category && cat.category.id === this.selectedCategory));
        }
  
        // Ordenar os campings antes de aplicar os filtros
        data = data.sort((a, b) => a.baseValue - b.baseValue);
  
        // Aplicar os filtros
        this.camping = data.filter(c => c.baseValue >= this.rangeValues[0] && c.baseValue <= this.rangeValues[1] && c.baseValue <= this.maxRangeValue);
      }
    });
  }
  
  

  getRules(camping: Camping): Rule[] {
    const ruleCodes = camping.propertyRules.slice(0, 4);
    return camping?.propertyRules?.length > 0 ? RULES.filter((r) => camping.propertyRules.includes(r.code)) : [];
  }

  // Métodos de Filtros
  // -----------------------------------------

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

  onBaseValueChange(): void {
    this.loadCampings();
  }
  onSortKeyChange(): void {
    this.loadCampings();
  }
  
  
  // onSortChange(event: any): void {
  //   const value = event.value;

  //   if (value.indexOf('!') === 0) {
  //     this.sortOrder = -1;
  //     this.sortField = value.substring(1, value.length);
  //   } else {
  //     this.sortOrder = 1;
  //     this.sortField = value;
  //   }
  // }

  filterCards(): void {
  }

  // Mini mapa Google

  initMap(): void {
    const mapOptions = {
      center: { lat: -27.5969, lng: 48.5495 }, // Coordenadas iniciais
      zoom: 8, // Nível de zoom inicial
    };

    const map = new google.maps.Map(document.getElementById('miniMap'), mapOptions);
  }

  ngAfterViewInit(): void {
    this.initMap();
  }
}
