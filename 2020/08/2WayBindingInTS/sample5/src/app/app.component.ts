import {Component, ComponentFactoryResolver, DoCheck, KeyValueDiffers, OnInit, ViewContainerRef} from '@angular/core';
import {Comp1Component} from './comp1/comp1.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, DoCheck {
  value1 = 'parent not changed';

  compRefInstance: any;
  compDiffer: any;

  constructor(private componentFactoryResolver: ComponentFactoryResolver,
              private viewContainerRef: ViewContainerRef,
              private differs: KeyValueDiffers
              ) {
  }

  ngOnInit(): void {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(Comp1Component);
    const componentRef = this.viewContainerRef.createComponent<Comp1Component>(componentFactory);
    this.compRefInstance = componentRef.instance;
    componentRef.instance.value = this.value1;
    componentRef.instance.valueChange.subscribe((value) => {
      this.value1 = value;
    });
    this.compDiffer = this.differs.find(this).create();
  }

  ngDoCheck(): void {
    if (this.compDiffer) {
      const changes = this.compDiffer.diff(this);
      if (changes) {
        changes.forEachChangedItem((result) => {
          if (result.key === 'value1') {
            this.compRefInstance.value = this.value1;
          }
        });
      }
    }
  }
}
