import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {QuestionnaireRoutingModule} from './questionnaire-routing.module';
import {QuestionnaireComponent} from './questionnaire.component';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import {AnimateBgModule} from '../core/animate-bg/animate-bg.module';
import {OrderModule} from 'ngx-order-pipe';


@NgModule({
  declarations: [QuestionnaireComponent],
  imports: [
    CommonModule,
    QuestionnaireRoutingModule,
    NgxChartsModule,
    AnimateBgModule,
    OrderModule,
  ]
})
export class QuestionnaireModule {
}
