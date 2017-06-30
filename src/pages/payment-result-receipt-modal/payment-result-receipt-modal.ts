import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';

/**
 * Generated class for the PaymentResultReceiptModalPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
    selector: 'page-payment-result-receipt-modal',
    templateUrl: 'payment-result-receipt-modal.html',
})
export class PaymentResultReceiptModalPage {

    model: any = {};

    constructor(public navCtrl: NavController, public navParams: NavParams, public viewController: ViewController) {

        this.model = this.navParams.data || {};

    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad PaymentResultReceiptModalPage');
    }

    close($event, type: boolean) {
        this.viewController.dismiss({type: type});
    }

    done($event) {
        if (this.model && this.model.button && this.model.button.click) {
            let clickResult = this.model.button.click($event, this);
            if (clickResult instanceof Promise) {
                clickResult.then(() => {
                    this.close($event, true)
                });
            } else {
                this.close($event, true)
            }
        } else {
            this.close($event, true)
        }
    }

}
