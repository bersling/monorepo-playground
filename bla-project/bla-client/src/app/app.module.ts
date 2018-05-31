import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RedModule} from 'red';
import {GreenModule} from '@company/greenmodule';
import {HelloWorld} from 'hwrld';
import {YellowModule} from '@company/yellowmodule';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    RedModule,
    GreenModule,
    BrowserModule,
    YellowModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    HelloWorld.sayHello();
  }
}
