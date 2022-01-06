import { Component } from '@angular/core';
import {delay, of, tap, timeout} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RXJSTimeout';

  constructor() {
    debugger;
/*    const o = of([]);
    o.pipe(
      delay(6000)
    );*/
/*
    const o = of([]).pipe(
      delay(6000),
      tap(() => console.log('tap'))
    );
*/
    const o = of([]);
    const o2 = o.pipe(
      delay(6000)
    );


    const startTime = new Date().getTime();
    o2.subscribe((result: any[]) => {
      debugger;
      const endTime = new Date().getTime();
      console.log('start time ', startTime);
      console.log('end time ', endTime );
      console.log('difference ', endTime - startTime);
    });

  }
}
