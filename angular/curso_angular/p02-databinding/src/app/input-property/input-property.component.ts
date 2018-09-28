import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-people',
  templateUrl: './input-property.component.html',
  styleUrls: ['./input-property.component.css']
})
export class InputPropertyComponent implements OnInit {

  //Incluir (expor) um atributo "nome" na 
  //  declaração externa do componente.
  @Input() nome:string = "Anderson";

  constructor() { }

  ngOnInit() {
  }

}
