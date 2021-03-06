import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./index/index.module').then(m => m.IndexModule)
  }, {
    path: 'questionnaire',
    loadChildren: () => import('./questionnaire/questionnaire.module').then(m => m.QuestionnaireModule)
  }, {
    path: 'credit',
    loadChildren: () => import('./members/members.module').then(m => m.MembersModule)
  }, {
    path: 'history',
    loadChildren: () => import('./history/history.module').then(m => m.HistoryModule)
  }, {
    path: 'comments',
    loadChildren: () => import('./comments/comments.module').then(m => m.CommentsModule)
  }, {
    path: 'illustration',
    loadChildren: () => import('./illusts/illusts.module').then(m => m.IllustsModule)
  }, {
    path: 'photos',
    loadChildren: () => import('./photos/photos.module').then(m => m.PhotosModule)
  }, {
    path: 'covers',
    loadChildren: () => import('./covers/covers.module').then(m => m.CoversModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
