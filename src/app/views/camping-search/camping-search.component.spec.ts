import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampingSearchComponent } from './camping-search.component';

describe('CampingSearchComponent', () => {
  let component: CampingSearchComponent;
  let fixture: ComponentFixture<CampingSearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CampingSearchComponent]
    });
    fixture = TestBed.createComponent(CampingSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
