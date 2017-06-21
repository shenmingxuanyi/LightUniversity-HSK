import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HskListPage } from './hsk-list';

@NgModule({
  declarations: [
    HskListPage,
  ],
  imports: [
    IonicPageModule.forChild(HskListPage),
  ],
  exports: [
    HskListPage
  ]
})
export class HskListPageModule {}
