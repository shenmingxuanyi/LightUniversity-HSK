import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReservationRecordsPage } from './reservation-records';

@NgModule({
  declarations: [
    ReservationRecordsPage,
  ],
  imports: [
    IonicPageModule.forChild(ReservationRecordsPage),
  ],
  exports: [
    ReservationRecordsPage
  ]
})
export class ReservationRecordsPageModule {}
