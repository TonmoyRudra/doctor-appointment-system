import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule} from '@angular/material/button';
  import { MatDatepickerModule } from '@angular/material/datepicker';
  import { MatCardModule} from '@angular/material/card';
  import { MatDialogModule} from '@angular/material/dialog';
  import { MatGridListModule} from '@angular/material/grid-list'
  import { MatIconModule} from '@angular/material/icon'
  import { MatInputModule} from '@angular/material/input'
  import { MatNativeDateModule} from '@angular/material/core';
  import { MatSnackBarModule} from '@angular/material/snack-bar'
  import { MatToolbarModule} from '@angular/material/toolbar'
  import { MatTooltipModule} from '@angular/material/tooltip'

import { FlexLayoutModule } from '@angular/flex-layout';
import {MatSelectModule} from '@angular/material/select';
import {MatDividerModule} from '@angular/material/divider'
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { CalenderViewComponent } from './Components/calender-view/calender-view.component';
import { CreateAppointmentComponent } from './Components/create-appointment/create-appointment.component';
import { ViewDetailsAppointmentComponent } from './Components/view-details-appointment/view-details-appointment.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
@NgModule({
  declarations: [
    AppComponent,
    CreateAppointmentComponent,
    ViewDetailsAppointmentComponent,
    NotFoundComponent,
    CalenderViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatSelectModule,
    MatDividerModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatTooltipModule,
    MatIconModule,
    MatGridListModule,
    MatDatepickerModule,
    MatDialogModule,
    MatToolbarModule,
    MatNativeDateModule,
    NgxMaterialTimepickerModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [CreateAppointmentComponent, ViewDetailsAppointmentComponent]
})
export class AppModule { }
