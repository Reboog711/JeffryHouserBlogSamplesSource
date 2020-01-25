import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  selectedUser = {name: 'John Johnerson'};

  dataProvider = [
    {name: 'Albert Albertson'},
    {name: 'Brian Brianerson'},
    {name: 'Cindy Cinderson'},
    {name: 'David Daviderson'},
    {name: 'Edward Ederson'},
    {name: 'Frank Frankerson'},
    {name: 'Greg Gregerson'},
    {name: 'Holly Hollerson'},
    {name: 'Ingrid Ingerson'},
    {name: 'John Johnerson'}
  ];

  selectedUserCompareFunction(option, value) {
    return option.name === value.name;
  }

}
