import {NgModule} from '@angular/core';
import {TestDirective} from './test';

@NgModule({
    declarations: [
        TestDirective,
    ],
    imports: [],
    exports: [
        TestDirective
    ]
})
export class TestDirectiveModule {
}
