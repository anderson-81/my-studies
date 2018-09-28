import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-elvis-operator',
  templateUrl: './elvis-operator.component.html',
  styleUrls: ['./elvis-operator.component.scss']
})
export class ElvisOperatorComponent implements OnInit {

  /*Criando objeto:*/
  person: any = {
    id: 123,
    name: 'Anderson',
    address: null
  };

  constructor() { }

  ngOnInit() {
  }

}
