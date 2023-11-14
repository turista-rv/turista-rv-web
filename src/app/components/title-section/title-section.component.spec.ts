import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleSectionComponent } from './title-section.component';

describe('TitleSectionComponent', () => {
  let component: TitleSectionComponent;
  let fixture: ComponentFixture<TitleSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TitleSectionComponent]
    });
    fixture = TestBed.createComponent(TitleSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
