import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampingShowComponent } from './camping-show.component';

describe('CampingShowComponent', () => {
  let component: CampingShowComponent;
  let fixture: ComponentFixture<CampingShowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CampingShowComponent]
    });
    fixture = TestBed.createComponent(CampingShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
