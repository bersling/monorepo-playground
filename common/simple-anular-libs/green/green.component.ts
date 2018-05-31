import { Component, OnInit } from '@angular/core';
import {RED} from '@company/colors';

@Component({
  selector: 'red',
  template: `
    <p [ngStyle]="{background: red}">
      red works!
    </p>
  `,
  styles: []
})
export class GreenComponent implements OnInit {

  color = RED;

  constructor() { }

  ngOnInit() {
  }

}
