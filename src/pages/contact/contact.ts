import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {PayPal, PayPalConfiguration, PayPalPayment} from "@ionic-native/paypal";
import {NativeAudio} from "@ionic-native/native-audio";
import {StreamingAudioOptions, StreamingMedia, StreamingVideoOptions} from "@ionic-native/streaming-media";
import {CaptureImageOptions, MediaFile, CaptureError, MediaCapture} from "@ionic-native/media-capture";
import {ZoomProvider} from "../../providers/zoom/zoom";


const mp3local = "./assets/mp3/001.mp3";

const mp3 = "http://s3-ap-southeast-1.amazonaws.com/yun.lightbeijing.com/lbj/Mp3_url/mp3_url/Mp3_url_1497338904.mp3";

const ogg = "http://s3-ap-southeast-1.amazonaws.com/yun.lightbeijing.com/lbj/Ogg_url/ogg_url/Ogg_url_1497338904.ogg";

@Component({
    selector: 'page-contact',
    templateUrl: 'contact.html'
})
export class ContactPage {

    playing: boolean = false;

    room: string;

    constructor(public zoomProvider: ZoomProvider, public mediaCapture: MediaCapture, public navCtrl: NavController, public payPal: PayPal, private nativeAudio: NativeAudio, public streamingMedia: StreamingMedia) {

    }

    pay($event) {


        let saleData = {
            "code": 200,
            "message": "OK",
            "data": {
                "cmd": "_xclick",
                "business": "736695887-facilitator@qq.com",
                "item_name": "LightBeijing Lesson Package",
                "item_number": "lbj1499222097",
                "amount": 67.89,
                "currency_code": "USD",
                "notify_url": "http://restful.lbj.forcn.cn/v1/paypal/notify",
                "return": "http://restful.lbj.forcn.cn/v1/paypals/result"
            }
        };
        this.payPal.init({
            PayPalEnvironmentProduction: 'AWRYoS2-JOEhUUnw8nvQcLeh9MHaf4c0snMeoS_7c5l_Ty_qTucAyzjwF8XsyaCMO-2c9SGVw',
            PayPalEnvironmentSandbox: 'AffqtfXo3ri8HtTVITiRoncN0I1LesCSTPUBNrJTaUWQJ7ARWZUwIIlW7ynAgqbDNJv_wuuRUKXp8Z-Q'
        }).then(() => {
            // Environments: PayPalEnvironmentNoNetwork, PayPalEnvironmentSandbox, PayPalEnvironmentProduction
            this.payPal.prepareToRender('PayPalEnvironmentSandbox', new PayPalConfiguration({
                defaultUserEmail: "sm.xy@live.com"
            })).then(() => {

                let payment = new PayPalPayment(saleData.data.amount.toString(), saleData.data.currency_code, saleData.data.item_name, 'sale');
                payment.bnCode = saleData.data.item_number;
                payment.custom = saleData.data.item_number;

                this.payPal.renderSinglePaymentUI(payment).then((data) => {

                    console.log(data);

                    alert(JSON.stringify(data));

                    // Successfully paid

                    // Example sandbox response
                    //
                    // {
                    //   "client": {
                    //     "environment": "sandbox",
                    //     "product_name": "PayPal iOS SDK",
                    //     "paypal_sdk_version": "2.16.0",
                    //     "platform": "iOS"
                    //   },
                    //   "response_type": "payment",
                    //   "response": {
                    //     "id": "PAY-1AB23456CD789012EF34GHIJ",
                    //     "state": "approved",
                    //     "create_time": "2016-10-03T13:33:33Z",
                    //     "intent": "sale"
                    //   }
                    // }

                }, () => {
                    // Error or render dialog closed without being successful
                });
            }, () => {
                // Error in configuration
            });
        }, () => {
            // Error in initialization, maybe PayPal isn't supported or something else
        });
    }

    stop($event) {

        this.nativeAudio.stop('mp3').then(() => {
            this.playing = false;
        }, (error) => {
            this.playing = false;
            alert(error)
        });
    }

    play($event) {


        let options: StreamingVideoOptions = {
            successCallback: () => {
                console.log('Video played')
            },
            errorCallback: (e) => {
                console.log('Error streaming')
            },
            orientation: 'landscape'
        };

        let optionsAudio: StreamingAudioOptions = {
            bgImageScale: "fit", // other valid values: "stretch"
            bgImage: 'https://s3-ap-southeast-1.amazonaws.com/yun.lightbeijing.com/lbj/Title_pic/title_pic/Title_pic_1497338903.jpg',
            successCallback: () => {
                console.log('Video played')
            },
            errorCallback: (e) => {
                console.log('Error streaming')
            }
        };


        this.streamingMedia.playAudio(mp3, optionsAudio);


        // this.playing = true;
        //
        // this.nativeAudio.preloadComplex('mp3', mp3, 1, 1, 0).then(() => {
        //     this.nativeAudio.play('mp3', () => {
        //         this.playing = false;
        //     }).catch(() => {
        //         this.playing = false;
        //     })
        // }, (error) => {
        //     this.playing = false;
        //     alert(error)
        // });

    }


    camera($event) {
        let options: CaptureImageOptions = {limit: 3};
        this.mediaCapture.captureImage(options)
            .then(
                (data: MediaFile[]) => console.log(data),
                (err: CaptureError) => console.error(err)
            );
    }

    zoom($event) {
        this.zoomProvider.open(this.room).then((data) => {
            console.log(data);
        }).catch((error) => {
            console.log(error)
        })
    }

}
