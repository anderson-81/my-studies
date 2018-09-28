import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[ngElse]'
})
export class NgelseDirectiveDirective {
  @Input()
  set ngElse(condition: boolean) {
    if (!condition) {
      this._viewContainerRef.createEmbeddedView(this._templateRef);
    } else {
      this._viewContainerRef.clear();
    }
    console.log('Executing ngElse...');
  }

  constructor(
    /*
      Represents an Embedded Template that can be used to instantiate Embedded Views.

      Represents a container where one or more Views can be attached.
    */
    private _templateRef: TemplateRef<any>,
    private _viewContainerRef: ViewContainerRef
  ) { }
}
