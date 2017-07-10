import {NgModule, ErrorHandler} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MyApp} from './app.component';

import {AboutPage} from '../pages/about/about';
import {ContactPage} from '../pages/contact/contact';
import {HomePage} from '../pages/home/home';
import {TabsPage} from '../pages/tabs/tabs';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {TestComponentModule} from "../components/test/test.module";
import {TestProvider} from '../providers/test/test';
import {TestDirective} from '../directives/test/test';
import {HttpModule} from "@angular/http";
import {TestPipe} from '../pipes/test/test';
import {TestDirectiveModule} from "../directives/test/test.module";
import {TestPipeModule} from "../pipes/test/test.module";
import {PayPal} from "@ionic-native/paypal";
import {NativeAudio} from "@ionic-native/native-audio";
import {StreamingMedia} from "@ionic-native/streaming-media";
import {MediaCapture} from "@ionic-native/media-capture";
import { ZoomProvider } from '../providers/zoom/zoom';

@NgModule({
    declarations: [
        MyApp,
        AboutPage,
        ContactPage,
        HomePage,
        TabsPage
    ],
    imports: [
        BrowserModule,
        HttpModule,
        IonicModule.forRoot(MyApp),
        TestComponentModule,
        TestDirectiveModule,
        TestPipeModule
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        AboutPage,
        ContactPage,
        HomePage,
        TabsPage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        PayPal,
        StreamingMedia,
        NativeAudio,
        MediaCapture,
        {provide: ErrorHandler, useClass: IonicErrorHandler},
        TestProvider,
    ZoomProvider
    ]
})
export class AppModule {
}
