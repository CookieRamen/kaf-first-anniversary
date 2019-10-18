import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {IllustsRoutingModule} from './illusts-routing.module';
import {IllustsComponent} from './illusts.component';
import {AnimateBgModule} from '../core/animate-bg/animate-bg.module';


@NgModule({
  declarations: [IllustsComponent],
  imports: [
    CommonModule,
    IllustsRoutingModule,
    AnimateBgModule
  ]
})
export class IllustsModule {
}
