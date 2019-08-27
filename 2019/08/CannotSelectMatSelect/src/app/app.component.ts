import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CannotSelectMatSelect';

  selectedItem1;
  selectedItem2;

  dataSource = [
    {label: 'one'},
    {label: 'two'},
    {label: 'three'},
    {label: 'four'},
    {label: 'five'},
    {label: 'six'},
    {label: 'seven'},
    {label: 'eight'},
    {label: 'nine'},
    {label: 'ten'}
  ];
}
