import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCampingComponent } from './create-camping.component';

describe('CreateCampingComponent', () => {
  let component: CreateCampingComponent;
  let fixture: ComponentFixture<CreateCampingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateCampingComponent]
    });
    fixture = TestBed.createComponent(CreateCampingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
