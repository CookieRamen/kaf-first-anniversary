import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CommentsRoutingModule} from './comments-routing.module';
import {CommentsComponent} from './comments.component';
import {AnimateBgModule} from '../core/animate-bg/animate-bg.module';


@NgModule({
  declarations: [CommentsComponent],
  imports: [
    CommonModule,
    CommentsRoutingModule,
    AnimateBgModule,
  ]
})
export class CommentsModule {
}
