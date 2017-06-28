import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyTimetablePage } from './my-timetable';

@NgModule({
  declarations: [
    MyTimetablePage,
  ],
  imports: [
    IonicPageModule.forChild(MyTimetablePage),
  ],
  exports: [
    MyTimetablePage
  ]
})
export class MyTimetablePageModule {}
