import { Component, OnInit } from '@angular/core';

// Adicionando serviço ao componente (manualmente):
import { PeopleService } from './people.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css'],
  providers: [PeopleService] // Escopo do componente.
})
export class PeopleComponent implements OnInit {
  // comento se quero usar como private
  // peopleService: PeopleService;

  people: string[] = [];

  /*
  constructor() {
        this.peopleService = new PeopleService();
  }
  */

  /*
  constructor(_peopleService: PeopleService) {
        this.peopleService = _peopleService;
  }
  */

  // Trabalhando com atributo private (ID):
  constructor(private _peopleService: PeopleService) { }

  ngOnInit() {
    this.people = this._peopleService.getPeople();

    // Sintaxe antiga:
    /*
    this._peopleService.emitterPeopleCreated.subscribe(
      function(person){
        console.log(person);
      }
    );
    */

    this._peopleService.emitterPeopleCreated.subscribe(person =>
      console.log(person)
    );
  }
}
