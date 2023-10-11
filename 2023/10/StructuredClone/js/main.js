class WrapperClass {
    value1;
    value2;
    nestedObject1;
    nestedObject2;

    constructor(value1, value2, value3, value4) {
        this.value1 = value1;
        this.value2 = value2;
        this.nestedObject1 = value3;
        this.nestedObject2 = value4


    }
}

class NestedClass {
    nestedValue1;
    nestedValue2;

    constructor(value1, value2) {
        this.nestedValue1 = value1;
        this.nestedValue2 = value2;
    }
}

function resetNestedValue1() {
    return new NestedClass('nestedClass1Value1', 'nestedClass1Value2');
}
function resetNestedValue2() {
    return new NestedClass('nestedClass2Value1', 'nestedClass2Value2');
}
function resetMainObject() {
    return new WrapperClass('nonNestedValue1', 'nonNestedValue2', resetNestedValue1(), resetNestedValue2())
}

// create Class
debugger;
/*
let nestedValue1 = resetNestedValue1();
let nestedValue2 = resetNestedValue2();
let myObject = new WrapperClass('nonNestedValue1', 'nonNestedValue2', nestedValue1, nestedValue2)
*/
let myObject = resetMainObject();

console.log(myObject);

let myClonedMyObject = structuredClone(myObject);

console.log(myClonedMyObject );

console.log(myObject === myClonedMyObject ); // expect false
console.log(myObject.nestedObject1 === myClonedMyObject.nestedObject1 ); // expect false
console.log(myObject.nestedObject2 === myClonedMyObject.nestedObject2 ); // expect false


console.log(myObject.value1); // expect nonNestedValue1
console.log(myClonedMyObject.value1 ); // expect  nonNestedValue1
console.log(myObject.value1 === myClonedMyObject.value1 ); // expect true

// Change simple value on Object1
myObject.value1 = 'nonNestedValue1Modified';

console.log(myObject.value1); // expect nonNestedValue1Modified
console.log(myClonedMyObject.value1 ); // expect  nonNestedValue1
console.log(myObject.value1 === myClonedMyObject.value1 ); // expect false

// Change simple value on ClonedObject1
myObject.value1 = 'nonNestedValue1';
myClonedMyObject.value1 = 'nonNestedValue1Modified';

console.log(myObject.value1); // expect nonNestedValue1Modified
console.log(myClonedMyObject.value1 ); // expect  nonNestedValue1Modified
console.log(myObject.value1 === myClonedMyObject.value1 ); // expect false


