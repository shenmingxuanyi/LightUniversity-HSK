import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PurchaseLessonPackagePage } from './purchase-lesson-package';

@NgModule({
  declarations: [
    PurchaseLessonPackagePage,
  ],
  imports: [
    IonicPageModule.forChild(PurchaseLessonPackagePage),
  ],
  exports: [
    PurchaseLessonPackagePage
  ]
})
export class PurchaseLessonPackagePageModule {}
