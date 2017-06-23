import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {TestProvider} from "../../providers/test/test";

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


}
