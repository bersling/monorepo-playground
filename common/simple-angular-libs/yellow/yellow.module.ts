import { NgModule } from '@angular/core';
import { YellowComponent } from './yellow.component';
import {CommonModule} from '@angular/common';
import {GreenModule} from '@company/greenmodule';

@NgModule({
  imports: [
    CommonModule,
    GreenModule
  ],
  declarations: [YellowComponent],
  exports: [YellowComponent]
})
export class _YellowModule { }
