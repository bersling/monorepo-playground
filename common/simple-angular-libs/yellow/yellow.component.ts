import {Component, OnInit} from '@angular/core';
import {YELLOW} from '@company/colors';

@Component({
  selector: 'yellow',
  template: `
    <p [ngStyle]="{background: color}">
      yellow works!
      <green></green>
    </p>
  `,
  styles: []
})
export class YellowComponent implements OnInit {

  color = YELLOW;

  constructor() {
  }

  ngOnInit() {
  }

}
