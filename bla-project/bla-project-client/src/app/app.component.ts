import {Component} from '@angular/core';
import {MAGENTA} from '@company/colors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  color = MAGENTA;
}
