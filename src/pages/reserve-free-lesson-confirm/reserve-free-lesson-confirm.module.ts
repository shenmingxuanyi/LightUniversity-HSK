import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReserveFreeLessonConfirmPage } from './reserve-free-lesson-confirm';

@NgModule({
  declarations: [
    ReserveFreeLessonConfirmPage,
  ],
  imports: [
    IonicPageModule.forChild(ReserveFreeLessonConfirmPage),
  ],
  exports: [
    ReserveFreeLessonConfirmPage
  ]
})
export class ReserveFreeLessonConfirmPageModule {}
