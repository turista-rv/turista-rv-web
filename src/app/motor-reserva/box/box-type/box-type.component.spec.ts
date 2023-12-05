import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxTypeComponent } from './box-type.component';

describe('BoxTypeComponent', () => {
  let component: BoxTypeComponent;
  let fixture: ComponentFixture<BoxTypeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BoxTypeComponent]
    });
    fixture = TestBed.createComponent(BoxTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
