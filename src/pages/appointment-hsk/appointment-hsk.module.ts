import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AppointmentHskPage } from './appointment-hsk';

@NgModule({
  declarations: [
    AppointmentHskPage,
  ],
  imports: [
    IonicPageModule.forChild(AppointmentHskPage),
  ],
  exports: [
    AppointmentHskPage
  ]
})
export class AppointmentHskPageModule {}
