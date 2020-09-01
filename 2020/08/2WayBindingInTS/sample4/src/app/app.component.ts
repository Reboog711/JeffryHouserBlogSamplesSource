import {Component, ComponentFactoryResolver, OnInit, ViewContainerRef} from '@angular/core';
import {Comp1Component} from './comp1/comp1.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  value1 = 'parent not changed';

  constructor(private componentFactoryResolver: ComponentFactoryResolver,
              private viewContainerRef: ViewContainerRef
              ) {
  }

  ngOnInit(): void {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(Comp1Component);
    const componentRef = this.viewContainerRef.createComponent<Comp1Component>(componentFactory);
    componentRef.instance.value = this.value1;
    componentRef.instance.valueChange.subscribe((value) => {
      this.value1 = value;
    });
  }
}
