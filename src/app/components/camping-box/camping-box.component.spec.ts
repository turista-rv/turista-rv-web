import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampingBoxComponent } from './camping-box.component';

describe('CampingBoxComponent', () => {
  let component: CampingBoxComponent;
  let fixture: ComponentFixture<CampingBoxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CampingBoxComponent]
    });
    fixture = TestBed.createComponent(CampingBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
