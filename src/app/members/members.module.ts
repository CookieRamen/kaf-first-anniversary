import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MembersRoutingModule } from './members-routing.module';
import { MembersComponent } from './members.component';
import {AnimateBgModule} from '../core/animate-bg/animate-bg.module';


@NgModule({
  declarations: [MembersComponent],
  imports: [
    CommonModule,
    MembersRoutingModule,
    AnimateBgModule,
  ]
})
export class MembersModule { }
