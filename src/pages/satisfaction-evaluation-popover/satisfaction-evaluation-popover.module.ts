import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SatisfactionEvaluationPopoverPage } from './satisfaction-evaluation-popover';

@NgModule({
  declarations: [
    SatisfactionEvaluationPopoverPage,
  ],
  imports: [
    IonicPageModule.forChild(SatisfactionEvaluationPopoverPage),
  ],
  exports: [
    SatisfactionEvaluationPopoverPage
  ]
})
export class SatisfactionEvaluationPopoverPageModule {}
