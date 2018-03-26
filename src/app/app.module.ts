import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BetfairService } from './api/betfair.service';
import { HttpClientModule } from '@angular/common/http';
import { NgHttpLoaderModule } from 'ng-http-loader/ng-http-loader.module';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgHttpLoaderModule
  ],
  providers: [BetfairService],
  bootstrap: [AppComponent]
})
export class AppModule { }
