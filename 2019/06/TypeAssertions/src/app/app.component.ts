import { Component } from '@angular/core';



export class TestClass {
  numbers: number[];
  counter = 0;

  get sum() {
    this.counter++;
    return this.numbers.reduce((accumulator, currentValue) => {
//      debugger;
//      console.log(this.counter);
      return accumulator + currentValue;
    });
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TypeConversions';

  constructor() {
    debugger;
    const testClassJSON = {numbers : [1, 2, 3, 4]};
//    console.log(testClassJSON.sum);  // compile error
//    console.log(testClassJSON['sum']);  // returns undefined

    const testClassAs = {numbers : [1, 2, 3, 4]} as TestClass;
//    console.log(testClassAs.sum);  // returns undefined

    const testClass = new TestClass();
    testClass.numbers = [1, 2, 3, 4];
//    console.log(testClass.sum); // returns 10


    // sample borrowed from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
    const target = { a: 1, b: 2 };
    const source = { b: 4, c: 5 };

    Object.assign(target, source);
//    console.log(target);
//    console.log(source);

    const testClassAssign = Object.assign(new TestClass(), {numbers : [1, 2, 3, 4]});
    console.log(testClassAssign.sum);  // returns 10

    /*
        const obj1 = new TestClass();
        const obj2 = { numbers : [1, 2, 3, 4] };

        const newObj1 = { ...obj1, ...obj2};
        console.log(newObj1);
        const newObj2 = { ...new TestClass(), ...{ numbers : [1, 2, 3, 4] }};
        console.log(newObj2);

        const testClassSpread = new TestClass(...testClassAs);
        console.log(testClassAssign.sum);  // returns 10

    */

  }
}
