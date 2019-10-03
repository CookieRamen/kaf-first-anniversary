import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {QuestionnaireRoutingModule} from './questionnaire-routing.module';
import {QuestionnaireComponent} from './questionnaire.component';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import {AnimateBgModule} from '../core/animate-bg/animate-bg.module';


@NgModule({
  declarations: [QuestionnaireComponent],
  imports: [
    CommonModule,
    QuestionnaireRoutingModule,
    NgxChartsModule,
    AnimateBgModule,
  ]
})
export class QuestionnaireModule {
}
