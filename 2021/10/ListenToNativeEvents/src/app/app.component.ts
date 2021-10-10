import {Component, ElementRef, ViewChild, OnInit, AfterViewInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'ListenToNativeEvents';

  @ViewChild('myButton')
  myButton!: ElementRef;

  onButtonClickWithAngularDirective(): void {
    debugger;
    console.log('button click w/ Angular directive');
  }

  ngAfterViewInit(): void {
    debugger;
    this.myButton.nativeElement.addEventListener('click', () => {
      debugger;
      console.log('button click w/ Native Listener');
    });
  }
}
