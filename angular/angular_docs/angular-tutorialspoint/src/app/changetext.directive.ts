import { Directive, ElementRef } from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[changeText]'
})
export class ChangetextDirective {

  constructor(Element: ElementRef) {
    console.log(this.reverse(Element.nativeElement.innerText));
    Element.nativeElement.innerText = this.reverse(Element.nativeElement.innerText);
  }

  private reverse(str: string) {
    return str.split('').reverse().join('');
  }
}

