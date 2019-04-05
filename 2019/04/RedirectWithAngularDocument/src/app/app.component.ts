import {Component, Inject} from '@angular/core';
import {DOCUMENT} from '@angular/common';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RedirectToExternalSite';

  constructor(
    @Inject(DOCUMENT) private document: Document
  ) {}

  onRedirect() {
    debugger;
    this.document.location.href = 'http://www.google.com';
  }
}
