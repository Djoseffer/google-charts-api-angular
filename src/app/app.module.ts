import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {DadosService, DashboardComponent, DashboardModule} from "./dashboard";

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    DashboardModule
  ],
  providers: [DadosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
