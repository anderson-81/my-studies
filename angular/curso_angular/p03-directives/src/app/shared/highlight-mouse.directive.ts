import {
  Directive,
  HostListener,
  /*ElementRef,
  Renderer,
  */
  HostBinding
} from '@angular/core';

@Directive({
  selector: '[appHighlightMouse]'
})
export class HighlightMouseDirective {

  /*
  private color: string;
  @HostBinding('style.color') get setColor(){
    return this.color;
  }
  */

  // constructor(private _elementRef: ElementRef, private _renderer: Renderer) {}

  constructor() { }

  // tslint:disable-next-line:member-ordering
  @HostBinding('style.backgroundColor')
  backcolor;

  @HostBinding('style.color')
  color;
  @HostListener('mouseenter')
  onMouseOver() {
    // Primeira forma:
    /*
    this._renderer.setElementStyle(
      this._elementRef.nativeElement,
      'background-color',
      'green'
    );
    this._renderer.setElementStyle(
      this._elementRef.nativeElement,
      'color',
      'yellow'
    );
    */

    // Segunda forma:
    this.backcolor = 'green';
    this.color = 'yellow';

    console.log('MouseOver');
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    // Primeira forma:
    /*
    this._renderer.setElementStyle(
      this._elementRef.nativeElement,
      'background-color',
      'white'
    );
    this._renderer.setElementStyle(
      this._elementRef.nativeElement,
      'color',
      'black'
    );
    */

    // Segunda forma:
    this.backcolor = 'white';
    this.color = 'black';

    // Segunda forma:
    console.log('MouseLeave');
  }
}
