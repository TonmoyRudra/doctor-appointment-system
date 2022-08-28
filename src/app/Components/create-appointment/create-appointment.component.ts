import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-appointment',
  templateUrl: './create-appointment.component.html',
  styleUrls: ['./create-appointment.component.css']
})
export class CreateAppointmentComponent implements OnInit {

  appointment: FormGroup;
  minDate = new Date();
  maxDate = new Date(this.minDate.getFullYear(), 11, 31);

  constructor(private fb: FormBuilder,
    private _dialogRef: MatDialogRef<CreateAppointmentComponent>) { }

  ngOnInit() {
    this.appointment = this.fb.group({
      'firstName': ['', [Validators.required, Validators.maxLength(40)]],
      'lastName': ['', [Validators.required, Validators.maxLength(40)]],
      'email': ['', [Validators.email, Validators.required]],
      'gender': [''],
      'age': [''],
      'date': ['', [Validators.required]],
      'time': ['', [Validators.required]],
    });
  }

  addAppointment() {
    let data = this.appointment.getRawValue();
    this.changeHourAndMinuteOfGivenTime(data);
    this._dialogRef.close({ data: data });
  }

  changeHourAndMinuteOfGivenTime(data) {
    let time1 = data.time.split(":");
    let d = new Date(data.date);
    d.setHours(time1[0]);
    d.setMinutes(time1[1]);
    data.date = d.toISOString();
  }
}
