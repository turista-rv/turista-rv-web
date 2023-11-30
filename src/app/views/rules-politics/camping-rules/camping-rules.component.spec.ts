import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampingRulesComponent } from './camping-rules.component';

describe('CampingRulesComponent', () => {
  let component: CampingRulesComponent;
  let fixture: ComponentFixture<CampingRulesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CampingRulesComponent]
    });
    fixture = TestBed.createComponent(CampingRulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
