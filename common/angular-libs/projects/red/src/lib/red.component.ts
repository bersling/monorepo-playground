import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'red',
  template: `
    <p style="background: red; color: white;">
      red works!
    </p>
  `,
  styles: []
})
export class RedComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
