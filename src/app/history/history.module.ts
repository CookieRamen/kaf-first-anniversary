import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HistoryRoutingModule} from './history-routing.module';
import {HistoryComponent} from './history.component';
import {AnimateBgModule} from '../core/animate-bg/animate-bg.module';
import {NgxTweetModule} from 'ngx-tweet';


@NgModule({
  declarations: [HistoryComponent],
  imports: [
    CommonModule,
    HistoryRoutingModule,
    AnimateBgModule,
    NgxTweetModule
  ]
})
export class HistoryModule {
}
