import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReserveLessonComfirmPage } from './reserve-lesson-comfirm';

@NgModule({
  declarations: [
    ReserveLessonComfirmPage,
  ],
  imports: [
    IonicPageModule.forChild(ReserveLessonComfirmPage),
  ],
  exports: [
    ReserveLessonComfirmPage
  ]
})
export class ReserveLessonComfirmPageModule {}
