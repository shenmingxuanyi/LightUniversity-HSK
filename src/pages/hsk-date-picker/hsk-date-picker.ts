import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import {ArrayUtil} from "../../util/ArrayUtil";
import {deepCopy} from "ionic-angular/util/util";


const LIST = [
    //当前用户可选的日期（14天）
    {
        "week": "Wed",
        "gmt_date": "2017-05-31",
        //标准时间
        "cur_day": "31",
        "cur_date": "2017-05-31",
        //用户时间
        "title_date": "May 31, 2017"
    },
    {
        "week": "Thu",
        "gmt_date": "2017-06-01",
        "cur_day": "1",
        "cur_date": "2017-06-01",
        "title_date": "June 01, 2017"
    },
    {
        "week": "Fri",
        "gmt_date": "2017-06-02",
        "cur_day": "2",
        "cur_date": "2017-06-02",
        "title_date": "June 02, 2017"
    },
    {
        "week": "Sat",
        "gmt_date": "2017-06-03",
        "cur_day": "3",
        "cur_date": "2017-06-03",
        "title_date": "June 03, 2017"
    },
    {
        "week": "Sun",
        "gmt_date": "2017-06-04",
        "cur_day": "4",
        "cur_date": "2017-06-04",
        "title_date": "June 04, 2017"
    }
];

@IonicPage()
@Component({
    selector: 'page-hsk-date-picker',
    templateUrl: 'hsk-date-picker.html',
})
export class HskDatePickerPage {

    dateList: Array<any> = LIST;

    theme: string = 'primary';

    markTheme: string = 'primary';

    currentDate: any = {};

    _weekList: Array<string> = ['Sun', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat'];

    _dayList: Array<Array<any>> = [];

    markDateList: Array<string> = [];

    constructor(public navCtrl: NavController, public navParams: NavParams, public viewController: ViewController) {

        this.dateList = this.navParams.get("dateList") || LIST;
        this.currentDate = this.navParams.get("currentDate") || (this.dateList || []).length > 0 ? this.dateList[0] : null;

    }

    ionViewDidLoad() {

        if (this.dateList && this.dateList.length > 0) {
            let list = deepCopy(this.dateList);

            let prevDate = this.convertDateFromString(this.dateList[0]['cur_date']);
            if (prevDate) {
                let prevIndex = prevDate.getDay();
                for (let i = 0; i < prevIndex; i++) {
                    list.unshift(null);
                }
            }

            let lastDate = this.convertDateFromString(this.dateList[this.dateList.length - 1]['cur_date']);
            if (lastDate) {
                let lastIndex = lastDate.getDay();
                for (let i = 0; i < 7 - lastIndex; i++) {
                    list.push(null);
                }
            }

            this._dayList = ArrayUtil.reduceArray(list, 7);
        }

    }

    convertDateFromString(dateString: string): Date {
        if (dateString) {
            let dateStrings: Array<string> = dateString.split("-");
            console.log("dateStrings", dateStrings)
            if (dateStrings.length >= 3) {
                let date = new Date(parseInt(dateStrings[0], 10), parseInt(dateStrings[1], 10) - 1, parseInt(dateStrings[2], 10), 0, 0, 0, 0);
                return date;
            }
        }
    }

    close($event, date) {
        $event.stopImmediatePropagation()
        $event.preventDefault();
        this.viewController.dismiss(date);
    }

}
