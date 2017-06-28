import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SatisfactionEvaluationPopoverPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-satisfaction-evaluation-popover',
  templateUrl: 'satisfaction-evaluation-popover.html',
})
export class SatisfactionEvaluationPopoverPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SatisfactionEvaluationPopoverPage');
  }

}
