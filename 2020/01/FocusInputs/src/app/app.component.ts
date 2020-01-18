import {Component, ElementRef, QueryList, ViewChildren} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChildren('input') inputs: QueryList<ElementRef>;

  onClick(index) {
    this.inputs.toArray()[index].nativeElement.focus();
  }

}
