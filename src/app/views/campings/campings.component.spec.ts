import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampingComponent } from './camping.component';

describe('CampingComponent', () => {
  let component: CampingComponent;
  let fixture: ComponentFixture<CampingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CampingComponent]
    });
    fixture = TestBed.createComponent(CampingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
