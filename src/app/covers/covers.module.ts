import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CoversRoutingModule} from './covers-routing.module';
import {CoversComponent} from './covers.component';
import {AnimateBgModule} from '../core/animate-bg/animate-bg.module';


@NgModule({
  declarations: [CoversComponent],
  imports: [
    CommonModule,
    CoversRoutingModule,
    AnimateBgModule
  ]
})
export class CoversModule {
}
