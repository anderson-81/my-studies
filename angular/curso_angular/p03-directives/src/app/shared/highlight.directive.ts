import { Directive, HostListener, HostBinding, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {

  constructor() { }

  @Input() defaultColor = 'white';
  @Input() highLightColor = 'blue';

  @HostBinding('style.backgroundColor')
  backcolor: string;

  @HostListener('mouseenter')
  onMouseOver() {
    this.backcolor = this.highLightColor;
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.backcolor = this.defaultColor;
  }

  ngOnInit() {
    this.backcolor = this.defaultColor;
  }
}
