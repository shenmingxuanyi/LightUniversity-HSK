import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PaymentResultReceiptPage } from './payment-result-receipt';

@NgModule({
  declarations: [
    PaymentResultReceiptPage,
  ],
  imports: [
    IonicPageModule.forChild(PaymentResultReceiptPage),
  ],
  exports: [
    PaymentResultReceiptPage
  ]
})
export class PaymentResultReceiptPageModule {}
