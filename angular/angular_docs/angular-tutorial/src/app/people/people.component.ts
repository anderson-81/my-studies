import { Component, OnInit } from '@angular/core';
import { Person } from './person';
// import { PEOPLE } from './mock-people';
import { PeopleService } from './people.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  // Ao relacionar com formulario, importar o "FormsModule" antes.

  constructor(private peopleService: PeopleService) { }

  title = 'People';

  atributo = '';

  person: Person;

  people: Person[] = [];

  subs: Subscription;

  // person: Person;

  ngOnInit() {
    this.person = null;
    // this.people = PEOPLE;
    this.getPeople();
  }

  getPeople(): void {
    // this.people = this.peopleService.getPeople();

    this.subs = this.peopleService.getPeopleObservable().subscribe(people => {
      this.people = people;
    });
  }

  /*
  onSelect(p): void {
    this.person = p;
  }
  */

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
