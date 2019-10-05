import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {IndexRoutingModule} from './index-routing.module';
import {IndexComponent} from './index.component';
import {AnimateBgModule} from '../core/animate-bg/animate-bg.module';


@NgModule({
  declarations: [IndexComponent],
  imports: [
    CommonModule,
    IndexRoutingModule,
    AnimateBgModule
  ],
})
export class IndexModule {
}
