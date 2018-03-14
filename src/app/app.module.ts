import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BetfairService } from './api/betfair.service';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [BetfairService],
  bootstrap: [AppComponent]
})
export class AppModule { }
