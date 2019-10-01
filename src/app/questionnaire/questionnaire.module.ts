import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuestionnaireRoutingModule } from './questionnaire-routing.module';
import { QuestionnaireComponent } from './questionnaire.component';


@NgModule({
  declarations: [QuestionnaireComponent],
  imports: [
    CommonModule,
    QuestionnaireRoutingModule
  ]
})
export class QuestionnaireModule { }
