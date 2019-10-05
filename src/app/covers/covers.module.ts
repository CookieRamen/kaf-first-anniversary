import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CoversRoutingModule} from './covers-routing.module';
import {CoversComponent} from './covers.component';


@NgModule({
  declarations: [CoversComponent],
  imports: [
    CommonModule,
    CoversRoutingModule
  ]
})
export class CoversModule {
}
