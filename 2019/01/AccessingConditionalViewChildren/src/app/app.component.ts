import {Component, OnInit, ViewChild} from '@angular/core';
import {View1Component} from './view1/view1.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  child1Hidden = true;
  child2Hidden = true;
  child3Hidden = true;

  @ViewChild('child1') child1: View1Component;
  @ViewChild('child2') child2: View1Component;
  private _child3: View1Component;
  @ViewChild('child3') set child3(value: View1Component) {
    this._child3 = value;
    console.log(this.child3);
  }
  get child3(): View1Component {
    return this._child3;
  }

  ngOnInit() {
    // child1 with the *ngif directive is undefined
//    console.log(this.child1);

    // child2 with the [hidden] directive is defined
//    console.log(this.child2);
    // child3 with the *ngIf directive is undefined
    console.log(this.child3);
  }

  onSample1Change(event) {
    this.child1.value = event.currentTarget.value;
  }

  onSample2Change(event) {
    this.child2.value = event.currentTarget.value;
  }

  onSample3Change(event) {
    this.child3.value = event.currentTarget.value;
  }
}
