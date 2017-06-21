import {NgModule} from '@angular/core';
import {TestPipe} from './test';

@NgModule({
    declarations: [
        TestPipe,
    ],
    imports: [],
    exports: [
        TestPipe
    ]
})
export class TestPipeModule {
}
