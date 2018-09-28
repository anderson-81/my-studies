import { Directive, ElementRef, Renderer } from '@angular/core';

/*Ele obriga usar o app<nome_da_diretiva>*/

@Directive({
  /* selector: 'h1[appMyDirective]' */
  selector: 'h1[appMyDirective]'
})
export class MyDirectiveDirective {
  constructor(private _elementRef: ElementRef, private _renderer: Renderer) {
    console.log(this._elementRef);
    // nativeElement.style.backgroundImage

    // Deve ser evitado esse tipo de acesso para evitar ataque XXS.
      // this._elementRef.nativeElement.style.backgroundColor = 'yellow';
      // this._elementRef.nativeElement.style.color = 'red';

    this._renderer.setElementStyle(this._elementRef.nativeElement, 'background-color', 'yellow');
    this._renderer.setElementStyle(this._elementRef.nativeElement, 'color', 'red');
  }
}
