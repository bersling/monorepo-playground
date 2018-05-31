import { NgModule } from '@angular/core';
import { RedComponent } from './red.component';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [RedComponent],
  exports: [RedComponent]
})
export class RedModule { }
