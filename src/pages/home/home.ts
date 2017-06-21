import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {HskListPage} from "../hsk-list/hsk-list";

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    constructor(public navCtrl: NavController) {

    }

    makeAppointment($event) {
        this.navCtrl.push(HskListPage)
    }

}
