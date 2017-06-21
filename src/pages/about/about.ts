import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {TestProvider} from "../../providers/test/test";

@Component({
    selector: 'page-about',
    templateUrl: 'about.html'
})
export class AboutPage {

    constructor(public navCtrl: NavController, public testProvider: TestProvider) {
        this.testProvider.setData("你好，我是:AboutPage");
    }

}
