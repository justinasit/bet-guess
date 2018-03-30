import { NgModule } from '@angular/core';
import { AppComponent } from '../app.component';
import { NgHttpLoaderModule } from 'ng-http-loader/ng-http-loader.module';
import { MainPageComponent } from '../main-page/main-page.component';
import { MaterialModule } from './material.module';
import { BetfairService } from '../api/betfair.service';
import { CommonModule } from '@angular/common';  

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent
  ],
  imports: [
    NgHttpLoaderModule,
    MaterialModule,
    CommonModule
  ],
  providers: [BetfairService]
})
export class SharedModule { }
