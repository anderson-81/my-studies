import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-form-debug',
  templateUrl: './form-debug.component.html',
  styleUrls: ['./form-debug.component.css']
})
export class FormDebugComponent implements OnInit {
  /*
    Receberá dados de outro componente atraves de um
    atributo na tag com o nome colocado como @Input() na classe.
  */
  @Input() form;

  constructor() { }

  ngOnInit() {
  }

}
