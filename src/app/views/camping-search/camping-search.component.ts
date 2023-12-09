import { Camping } from 'src/app/models/camping.model';
import { CampingService } from 'src/app/services/camping.service';
import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { RULES } from 'src/app/utils/rules-enum';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

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
  selectedCategory: string = 'all';
  isSmallScreen: boolean = false;
  showFilters: boolean = false;
  showFiltersButton = true;

  ratingValue: number = 4;
  category = 'Smart Camping';

  constructor(
    private _service: CampingService,
    private breakpointObserver: BreakpointObserver
  ) { }

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
  }

  loadCampings() {
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
  
  selectCategory(category: string) {
    this.selectedCategory = category;
    this.loadCampings();
  }

  onCategoryChange() {
    this.loadCampings();
  }

  onPriceChange() {
    this.loadCampings();
  }

  onSortChange(event: any) {
    let value = event.value;

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
}
