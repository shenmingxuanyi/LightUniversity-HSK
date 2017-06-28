import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ReserveFreeLessonConfirmPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-reserve-free-lesson-confirm',
  templateUrl: 'reserve-free-lesson-confirm.html',
})
export class ReserveFreeLessonConfirmPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReserveFreeLessonConfirmPage');
  }

}
