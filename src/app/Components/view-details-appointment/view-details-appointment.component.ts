import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-view-details-appointment',
  templateUrl: './view-details-appointment.component.html',
  styleUrls: ['./view-details-appointment.component.css']
})
export class ViewDetailsAppointmentComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public appointmentInfo: any) { }

  ngOnInit() {
  }


}
