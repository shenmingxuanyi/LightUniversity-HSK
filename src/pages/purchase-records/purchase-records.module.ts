import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PurchaseRecordsPage } from './purchase-records';

@NgModule({
  declarations: [
    PurchaseRecordsPage,
  ],
  imports: [
    IonicPageModule.forChild(PurchaseRecordsPage),
  ],
  exports: [
    PurchaseRecordsPage
  ]
})
export class PurchaseRecordsPageModule {}
