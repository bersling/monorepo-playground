import { Component, OnInit } from '@angular/core';
import {GREEN, RED} from '@company/colors';

@Component({
  selector: 'green',
  template: `
    <p [ngStyle]="{background: color}">
      green works!
    </p>
  `,
  styles: []
})
export class GreenComponent implements OnInit {

  color = GREEN;

  constructor() { }

  ngOnInit() {
  }

}
