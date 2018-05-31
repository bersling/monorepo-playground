import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RedModule} from 'red';
import {GreenModule} from '@company/greenmodule';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    RedModule,
    GreenModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
