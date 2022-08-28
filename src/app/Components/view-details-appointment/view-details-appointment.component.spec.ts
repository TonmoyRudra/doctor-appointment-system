import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDetailsAppointmentComponent } from './view-details-appointment.component';

describe('ViewDetailsAppointmentComponent', () => {
  let component: ViewDetailsAppointmentComponent;
  let fixture: ComponentFixture<ViewDetailsAppointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewDetailsAppointmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewDetailsAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
