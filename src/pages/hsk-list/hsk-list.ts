import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {TestProvider} from "../../providers/test/test";

/**
 * Generated class for the HskListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
    selector: 'page-hsk-list',
    templateUrl: 'hsk-list.html',
})
export class HskListPage {

    constructor(public navCtrl: NavController, public navParams: NavParams, public testProvider: TestProvider) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad HskListPage');

        console.log(this.testProvider.getData())


    }

    appointmentHsk($event) {
        this.navCtrl.push("AppointmentHskPage");
    }

}
