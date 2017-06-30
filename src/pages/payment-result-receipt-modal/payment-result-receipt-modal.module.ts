import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PaymentResultReceiptModalPage } from './payment-result-receipt-modal';

@NgModule({
  declarations: [
    PaymentResultReceiptModalPage,
  ],
  imports: [
    IonicPageModule.forChild(PaymentResultReceiptModalPage),
  ],
  exports: [
    PaymentResultReceiptModalPage
  ]
})
export class PaymentResultReceiptModalPageModule {}
