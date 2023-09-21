import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Header } from './components/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import {MatIconModule} from '@angular/material/icon'




@NgModule({
  declarations: [
    AppComponent,
    Header,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
