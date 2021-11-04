import { Component } from '@angular/core';
import {ServiceWithPromiseService} from './service-with-promise.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TestPromise';

  error!: boolean;
  constructor(public serviceWithPromiseService: ServiceWithPromiseService) {}

  callServiceWithPromise(): void {
    this.serviceWithPromiseService.methodReturningPromise().then((result) => {
      this.error = true;
    }).catch((result) => {
      this.error = false;
    });
  }
}
