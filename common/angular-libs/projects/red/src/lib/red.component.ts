import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'red',
  template: `
    <p [ngStyle]="{background: red}">
      red works!
    </p>
  `,
  styles: []
})
export class RedComponent implements OnInit {

  red: RED;

  constructor() { }

  ngOnInit() {
  }

}
