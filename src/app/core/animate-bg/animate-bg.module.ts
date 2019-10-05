import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ParticlesModule} from 'ng-particle';
import {AnimateBgComponent} from './animate-bg.component';


@NgModule({
  declarations: [AnimateBgComponent],
  imports: [
    CommonModule,
    ParticlesModule,
  ],
  exports: [AnimateBgComponent]
})
export class AnimateBgModule {
}
