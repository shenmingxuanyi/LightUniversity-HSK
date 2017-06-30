import {Component, NgZone, OnInit, ViewChild} from '@angular/core';
import {Content, Header, NavController, PopoverController} from 'ionic-angular';
import {TestProvider} from "../../providers/test/test";


const UP_HEIGHT: number = 40;
const DOWN_HEIGHT: number = 160;

@Component({
    selector: 'page-about',
    templateUrl: 'about.html'
})
export class AboutPage implements OnInit {

    @ViewChild(Content) content: Content;

    @ViewChild(Header) header: Header;

    _headerNativeElement: HTMLElement;

    _startPosition: number;

    _startRadix: number = 0;

    constructor(public navCtrl: NavController, public testProvider: TestProvider, public ngZone: NgZone, public popoverCtrl: PopoverController) {
        this.testProvider.setData("你好，我是:AboutPage");
    }

    ngOnInit() {
        this._startPosition = this.content.scrollTop;

        this._headerNativeElement = this.header._elementRef.nativeElement;
        //初始化
        this._headerNativeElement.style.opacity = "1";
        this._headerNativeElement.style.transform = "translate3d(0,0,0)";


    }

    ionViewDidLoad() {
    }

    ionScrollStart($event) {
        this._startPosition = $event.scrollTop;
        this.updateHeaderView($event.scrollTop - this._startPosition, true);
    }

    ionScroll($event) {
        this.updateHeaderView($event.scrollTop - this._startPosition);
    }

    ionScrollEnd($event) {
        this.updateHeaderView($event.scrollTop - this._startPosition, true);
        this._startPosition = $event.scrollTop;
    }

    updateHeaderView(changeHeight: number, isEndOrStart: boolean = false) {

        let radix = this._startRadix;

        radix = this.getSafeStyleNumber(this._startRadix + changeHeight / (changeHeight > 0 ? DOWN_HEIGHT : UP_HEIGHT));

        this._headerNativeElement.style.opacity = (1 - radix) + '';

        this._headerNativeElement.style.transform = "translate3d(0,-" + radix * 100 + "%,0)";

        if (isEndOrStart) {
            this._startRadix = radix;
        }
    }

    getSafeStyleNumber(number: number) {
        return number < 0 ? 0 : (number > 1 ? 1 : number);
    }

    finallyUpdateHeaderView(changeHeight: number) {

    }

    kechengbiao($event) {
        this.navCtrl.push('ReservationRecordsPage');
    }

    goumaicika($event) {
        this.navCtrl.push('PurchaseLessonPackagePage');
    }

    goumaijilu($event) {
        this.navCtrl.push('PurchaseRecordsPage');
    }

    satisfactionEvaluationPopoverPage($event) {

        let popover = this.popoverCtrl.create('SatisfactionEvaluationPopoverPage', {}, {cssClass: 'popover-container-lg'});
        popover.present();

    }

    paymentResultReceiptPage1($event) {

    }

    paymentResultReceiptPage2($event) {

    }

}
