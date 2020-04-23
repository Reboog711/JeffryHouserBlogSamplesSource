import { Component } from '@angular/core';

class InnerData {
  public data = 'default';
}

class OuterData {
  public inner: InnerData;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public populatedInstance: OuterData;
  public nullInstance: OuterData;
  public nullInner: OuterData;
  public nullInnerData: OuterData;

  constructor() {
    debugger;
    this.populatedInstance = new OuterData();
    this.populatedInstance.inner = new InnerData();
    this.populatedInstance.inner.data = 'name';

    this.nullInner = new OuterData();

    this.nullInnerData = new OuterData();
    this.nullInnerData.inner = new InnerData();
    delete this.nullInnerData.inner.data;

    // typescript optional chaining
    console.log('populatedInstance');
    console.log(this.populatedInstance.inner.data);

    console.log('Null Inner');
    // error approach
//    console.log(this.nullInner.inner.data);
    // old way to fix
    if (this.nullInner.inner) {
      console.log(this.nullInner.inner.data);
    }
    console.log(this.nullInner.inner?.data);

    console.log('null Inner Data');
    console.log(this.nullInnerData.inner.data);

    console.log('null Instance');
//    console.log(this.nullInstance.inner.data);
    if (this.nullInstance && this.nullInstance.inner && this.nullInstance.inner.data) {
      console.log(this.nullInstance.inner.data);
    }

    console.log(this.nullInstance?.inner?.data);

    // Nullish Coalescing sample
    debugger;
    let foo;
    const x = foo ?? 'Some Default Value';
    console.log(x);
    foo = 'something non default value';
    const y = foo ?? 'Some Default Value';
    console.log(y);

  }
}
