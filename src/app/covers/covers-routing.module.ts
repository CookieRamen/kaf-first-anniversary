import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CoversComponent} from './covers.component';


const routes: Routes = [
  {
    path: '',
    component: CoversComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoversRoutingModule {
}
