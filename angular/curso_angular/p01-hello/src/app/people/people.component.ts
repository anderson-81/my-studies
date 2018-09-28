import { Component, OnInit } from '@angular/core';
import { PeopleService } from './people.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  title: string = '';
  people: string[];

  /*
  constructor() { 
    //Será passado ao template por INTERPOLAÇÃO.
    this.title = "People's Listing";

    //Instanciando serviço e buscando dados.
    console.log("Instanciando serviço e buscando dados...");
    var pService:PeopleService = new PeopleService();
    this.people = pService.GetPeople();
  }
  */

  //Constructor com INJEÇÃO DE DEPENDENCIA.
  constructor(public pService: PeopleService) {
    //Será passado ao template por INTERPOLAÇÃO.
    this.title = "People's Listing";

    //Utilizando serviço e buscando dados.
    console.log("Instanciando serviço e buscando dados...");
    this.people = this.pService.GetPeople();
  }


  ngOnInit() {
  }

}

/*
  Como boa prática, a lógica de programação de como os dados
  serão trazidos, por exemplo, de um servidor, não podem ser
  colocados nesse arquivo. 
  O ideal e usar a injeção de dependência com serviços.
*/
