import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PrivateSpy';

  myPublicMethod(value) {
    return this.myPrivateMethod(value);
  }

  private myPrivateMethod(value) {
    return value;
  }
}
