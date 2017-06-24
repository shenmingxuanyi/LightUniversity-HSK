import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HskDatePickerPage } from './hsk-date-picker';

@NgModule({
  declarations: [
    HskDatePickerPage,
  ],
  imports: [
    IonicPageModule.forChild(HskDatePickerPage),
  ],
  exports: [
    HskDatePickerPage
  ]
})
export class HskDatePickerPageModule {}
