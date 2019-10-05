import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LottieModule} from 'ngx-lottie';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LottieModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
