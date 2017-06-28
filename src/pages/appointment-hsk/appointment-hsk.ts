import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, PopoverController} from 'ionic-angular';

/**
 * Generated class for the AppointmentHskPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
    selector: 'page-appointment-hsk',
    templateUrl: 'appointment-hsk.html',
})
export class AppointmentHskPage {

    constructor(public navCtrl: NavController, public navParams: NavParams, public popoverCtrl: PopoverController) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad AppointmentHskPage');
    }

    showHskTimePickerPage($event) {
        this.navCtrl.push('HskTimePickerPage', null, null, (data) => {
            console.log(data)
        }).then((data) => {
            console.log(data)
        })
    }

    showHskDatePickerPage($event) {
        this.navCtrl.push('HskDatePickerPage')
    }

    selectLessonTime($event, timeData) {
        let popover = this.popoverCtrl.create('ReserveLessonComfirmPage', {}, {cssClass: 'popover-container-lg'});

        popover.onWillDismiss((data) => {
            console.log(data);
        });

        popover.present();
    }

}
