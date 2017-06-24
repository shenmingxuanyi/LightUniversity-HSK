import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HskTimePickerPage } from './hsk-time-picker';

@NgModule({
  declarations: [
    HskTimePickerPage,
  ],
  imports: [
    IonicPageModule.forChild(HskTimePickerPage),
  ],
  exports: [
    HskTimePickerPage
  ]
})
export class HskTimePickerPageModule {}
