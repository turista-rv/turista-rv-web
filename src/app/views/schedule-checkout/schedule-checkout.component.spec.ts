import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleCheckoutComponent } from './schedule-checkout.component';

describe('ScheduleCheckoutComponent', () => {
  let component: ScheduleCheckoutComponent;
  let fixture: ComponentFixture<ScheduleCheckoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScheduleCheckoutComponent]
    });
    fixture = TestBed.createComponent(ScheduleCheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
