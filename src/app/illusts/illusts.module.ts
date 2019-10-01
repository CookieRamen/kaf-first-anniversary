import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IllustsRoutingModule } from './illusts-routing.module';
import { IllustsComponent } from './illusts.component';


@NgModule({
  declarations: [IllustsComponent],
  imports: [
    CommonModule,
    IllustsRoutingModule
  ]
})
export class IllustsModule { }
