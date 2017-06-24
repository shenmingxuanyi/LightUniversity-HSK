import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HskTeacherInfoPage } from './hsk-teacher-info';

@NgModule({
  declarations: [
    HskTeacherInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(HskTeacherInfoPage),
  ],
  exports: [
    HskTeacherInfoPage
  ]
})
export class HskTeacherInfoPageModule {}
