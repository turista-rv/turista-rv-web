import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampingPoliticsComponent } from './camping-politics.component';

describe('CampingPoliticsComponent', () => {
  let component: CampingPoliticsComponent;
  let fixture: ComponentFixture<CampingPoliticsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CampingPoliticsComponent]
    });
    fixture = TestBed.createComponent(CampingPoliticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
