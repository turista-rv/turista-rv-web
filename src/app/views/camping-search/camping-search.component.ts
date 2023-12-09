import { Camping } from 'src/app/models/camping.model';
import { CampingService } from 'src/app/services/camping.service';
import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { RULES } from 'src/app/utils/rules-enum';

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
  rangeValues: number[] = [35, 200];
  selectedCategory: string = 'all';
  selectedPrice: number[] = [35, 200];

  ratingValue: number = 4;
  category = 'Smart Camping';

getRules(): Rule[] {
  return RULES.slice(0, 4);
}

  constructor(private _service: CampingService) { }

  ngOnInit(): void {
    this.loadCampings();
    this.sortOptions = [
      { label: 'Menor preço', value: '!baseValue' },
      { label: 'Maior preço', value: 'baseValue' },
      { label: 'Distância', value: '' }
    ];
  }

  loadCampings() {
    this._service.listCampings().subscribe((data: Camping[]) => {
      if (data.length > 0) {
        this.camping = data;
      
      }
    });
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


}


