import { NgModule } from '@angular/core';
import { GreenComponent } from './green.component';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [GreenComponent],
  exports: [GreenComponent]
})
export class _GreenModule { }
