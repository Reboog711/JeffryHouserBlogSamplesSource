import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  value1 = 'some value';

  forceChange(): void {
    debugger;
    this.value1 = 'force changed';
  }

}
