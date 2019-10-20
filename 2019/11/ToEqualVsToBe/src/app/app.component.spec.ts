import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('toEqual vs ToBo', () => {

  it('Should compare array of Objects', () => {
    const obj1 = {id: 1, foo: 'bar'};
    const obj2 = {id: 2, foo: 'bar2'};
    const array1 = [obj1, obj2];
    const array2 = [obj1, obj2];

    // fails; different references
//    expect(array1).toBe(array2);

    // success
    expect(array1[1]).toBe(array2[1]); // reference compare, equal
    expect(array1).not.toBe(array2); // reference compare; not equal
    expect(array1).toEqual(array2); // element compare; same references, equal

    const array3 = [obj2, obj1];
    expect(array1).not.toEqual(array3); // element array; different order, not equal

    const obj3 = {id: 1, foo: 'bar'};
    const array4 = [obj3, obj2];
    expect(array1).toEqual(array4);
  });

  it('Should compare  Objects', () => {
    const obj1 = {id: 1, foo: 'bar'};
    const obj2 = {id: 1, foo: 'bar'};

    expect(obj1).not.toBe(obj2); // reference compare; not equal
    expect(obj1).toEqual(obj2); // property compare; equal

    const obj3 = {id: 1, foo: 'bar', foo2: 'bar2'};
    expect(obj1).not.toEqual(obj3); // property compare; not equal

  });
});
