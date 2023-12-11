import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { RULES } from 'src/app/utils/rules-enum';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Camping } from 'src/app/models/camping.model';
import { CampingService } from 'src/app/services/camping.service';
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
  styleUrls: ['./camping-search.component.scss']
})
export class CampingSearchComponent implements OnInit {
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


  
  ratingValue = 4;
  category = 'Smart Camping';

  constructor(
    private _service: CampingService,
    private breakpointObserver: BreakpointObserver
  ) {}

  ngOnInit(): void {
    this.loadCampings();
    this.sortOptions = [
      { label: 'Menor preço', value: '!baseValue' },
      { label: 'Maior preço', value: 'baseValue' },
      { label: 'Distância', value: '' }
    ];

    this.breakpointObserver.observe([Breakpoints.Small, Breakpoints.XSmall])
      .subscribe(result => {
        this.isSmallScreen = result.matches;
      });

    if (typeof google !== 'undefined' && typeof google.maps !== 'undefined') {
      this.initMap();
    }
  }

  loadCampings(): void {
    this._service.listCampings().subscribe((data: Camping[]) => {
      if (data.length > 0) {
        this.camping = data;
      }
    });
  }

  toggleFilters(): void {
    this.showFilters = !this.showFilters;
    if (this.showFilters) {
      this.isSmallScreen ? this.hideFiltersButton() : (this.showFiltersButton = false);
    }
  }

  hideFiltersButton(): void {
    this.showFiltersButton = false;
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
    return camping?.propertyRules?.length > 0 ? RULES.filter(r => camping.propertyRules.includes(r.code)) : [];
  }

  // Mini mapa google
  initMap(): void {
    const mapOptions = {
      center: { lat: -34.397, lng: 150.644 }, // Coordenadas iniciais
      zoom: 8, // Nível de zoom inicial
    };

    const map = new google.maps.Map(document.getElementById('miniMap'), mapOptions);
  }

  // Inicializa o mapa quando a página for carregada
  ngAfterViewInit(): void {
    this.initMap();
  }
}
