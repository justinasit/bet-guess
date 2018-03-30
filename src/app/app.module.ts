import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { BetfairService } from './api/betfair.service';
import { HttpClientModule } from '@angular/common/http';
import { NgHttpLoaderModule } from 'ng-http-loader/ng-http-loader.module';
import { MaterialModule } from './shared/material.module';

import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';


@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgHttpLoaderModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [BetfairService],
  bootstrap: [AppComponent]
})
export class AppModule { }
