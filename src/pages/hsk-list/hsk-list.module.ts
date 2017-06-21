import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {HskListPage} from './hsk-list';
import {TestComponentModule} from "../../components/test/test.module";
import {TestDirectiveModule} from "../../directives/test/test.module";
import {TestPipeModule} from "../../pipes/test/test.module";

@NgModule({
    declarations: [
        HskListPage,
    ],
    imports: [
        IonicPageModule.forChild(HskListPage),
        TestComponentModule,
        TestDirectiveModule,
        TestPipeModule
    ],
    exports: [
        HskListPage
    ]
})
export class HskListPageModule {
}
