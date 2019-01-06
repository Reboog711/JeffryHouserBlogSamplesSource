import { Component } from '@angular/core';
import {MY_TEST_CONSTANT} from './Constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'UsingConstantInView';

  myConstant = MY_TEST_CONSTANT;

}
