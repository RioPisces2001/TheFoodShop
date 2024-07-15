import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {StarRatingModule,StarRatingConfigService,StarRatingConfig } from 'angular-star-rating';
import { AppRoutingModule } from './app-routing.module';
@NgModule({
  declarations: [

  ],
  imports: [
    AppComponent,
    BrowserModule,
    StarRatingModule,
    AppRoutingModule
  ],
  providers: [StarRatingConfigService,StarRatingConfig],
  bootstrap: []
})
export class AppModule { }
