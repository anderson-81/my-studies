import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../people/people.service';

@Component({
  selector: 'app-create-person',
  templateUrl: './create-person.component.html',
  styleUrls: ['./create-person.component.css'],
  providers: [PeopleService] // Escopo do componente.
})
export class CreatePersonComponent implements OnInit {

  people: string[] = [];

  constructor(private _peopleService: PeopleService) { }

  ngOnInit() {
    this.people = this._peopleService.getPeople();
  }

  SavePerson(name: string) {
    this._peopleService.createPerson(name);
  }
}
