import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampingCheckoutComponent } from './camping-checkout.component';

describe('CampingCheckoutComponent', () => {
  let component: CampingCheckoutComponent;
  let fixture: ComponentFixture<CampingCheckoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CampingCheckoutComponent]
    });
    fixture = TestBed.createComponent(CampingCheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
