import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';

/**
 * Generated class for the ReserveLessonConfirmPopoverPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
    selector: 'page-reserve-lesson-confirm-popover',
    templateUrl: 'reserve-lesson-confirm-popover.html',
})
export class ReserveLessonConfirmPopoverPage {

    constructor(public navCtrl: NavController, public navParams: NavParams, public viewController: ViewController) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad ReserveLessonComfirmPage');
    }

    close($event, result) {
        this.viewController.dismiss(result);
    }

}
