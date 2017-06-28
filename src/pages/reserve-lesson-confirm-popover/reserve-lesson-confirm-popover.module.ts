import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReserveLessonConfirmPopoverPage } from './reserve-lesson-confirm-popover';

@NgModule({
  declarations: [
    ReserveLessonConfirmPopoverPage,
  ],
  imports: [
    IonicPageModule.forChild(ReserveLessonConfirmPopoverPage),
  ],
  exports: [
    ReserveLessonConfirmPopoverPage
  ]
})
export class ReserveLessonConfirmPopoverPageModule {}
