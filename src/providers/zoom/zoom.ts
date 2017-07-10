import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';

declare var cordova: any;
@Injectable()
export class ZoomProvider {

    constructor() {
    }

    open(roomNumber?: string, password?: string): Promise<any> {

        return new Promise((resolve, reject) => {
            try {
                cordova.plugins.SSCMeetingService.start({meetingNo: roomNumber}, resolve, reject)
            } catch (error) {
                reject(error);
            }
        });

    }

}
