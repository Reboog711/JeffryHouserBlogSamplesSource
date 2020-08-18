import {
  Component,
  ComponentFactoryResolver, DoCheck,
  ElementRef,
  KeyValueDiffer,
  KeyValueDiffers,
  OnInit,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import {Comp1Component} from './comp1/comp1.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, DoCheck {

  value1 = 'Value 1';
  value2 = 'Value 2';
  value3 = 'Value 3';
  value3Ref: any;
  value3Differ: any;

  value4Ref: any;

  private _value4 = 'Value 4';
  get value4(): string {
    return this._value4;
  }
  set value4(value: string) {
    this._value4 = value;
    if (this.value4Ref) {
      this.value4Ref.value = value;
    }
  }

  value5Ref: any;

  private _value5 = 'Value 5';
  get value5(): string {
    return this._value5;
  }
  set value5(value: string) {
    this._value5 = value;
    if (this.value5Ref) {
      this.value5Ref.value = value;
    }
  }

  constructor(private componentFactoryResolver: ComponentFactoryResolver, private viewContainerRef: ViewContainerRef,
              private differs: KeyValueDiffers) {
  }

  ngDoCheck(): void {
    if (this.value3Differ) {
      const changes = this.value3Differ.diff(this);
      if (changes) {
        changes.forEachChangedItem((result) => {
          if (result.key === 'value3') {
            debugger;
            this.value3Ref.value = this.value3;
          }
        });
      }
    }
  }

  ngOnInit(): void {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(Comp1Component);
    const componentRefNoBinding = this.viewContainerRef.createComponent<Comp1Component>(componentFactory);
    componentRefNoBinding.instance.title = 'No Binding';
    componentRefNoBinding.instance.value = this.value1;

    const componentRefFromInsideOut = this.viewContainerRef.createComponent<Comp1Component>(componentFactory);
    componentRefFromInsideOut.instance.title = 'One Way Binding from inside out';
    componentRefFromInsideOut.instance.value = this.value2;
    componentRefFromInsideOut.instance.valueChanged.subscribe((value)  => {
      debugger;
      this.value2 = value;
    });

    const componentRefFromOutsideInWithDiffer = this.viewContainerRef.createComponent<Comp1Component>(componentFactory);
    componentRefFromOutsideInWithDiffer.instance.title = 'One way Binding from Outside In (Using Differs)';
    componentRefFromOutsideInWithDiffer.instance.value = this.value3;
    this.value3Ref = componentRefFromOutsideInWithDiffer.instance;
    this.value3Differ = this.differs.find(this).create();

    const componentRefFromOutsideInWithSetter = this.viewContainerRef.createComponent<Comp1Component>(componentFactory);
    componentRefFromOutsideInWithSetter.instance.title = 'One way Binding from Outside In (using Setter)';
    componentRefFromOutsideInWithSetter.instance.value = this.value4;
    this.value4Ref = componentRefFromOutsideInWithSetter.instance;

    const componentRefTwoWayBindingWithSetter = this.viewContainerRef.createComponent<Comp1Component>(componentFactory);
    componentRefTwoWayBindingWithSetter.instance.title = 'Two Way Binding (using Setter)';
    componentRefTwoWayBindingWithSetter.instance.value = this.value5;
    componentRefTwoWayBindingWithSetter.instance.valueChanged.subscribe((value)  => {
      this.value5 = value;
    });
    this.value5Ref = componentRefTwoWayBindingWithSetter.instance;
  }

  dump(): void {
    debugger;
    console.log(this.value1);
  }

}
