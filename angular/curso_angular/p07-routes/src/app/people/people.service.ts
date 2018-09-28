import { Injectable } from '@angular/core';

@Injectable()
export class PeopleService {

  constructor() { }

  getPeople() {
    return [
      { id: 1, name: 'Anderson' },
      { id: 2, name: 'Mara' },
      { id: 3, name: 'Adriana' },
      { id: 4, name: 'Lucia' },
      { id: 5, name: 'Joana' },
      { id: 6, name: 'Fernanda' },
      { id: 7, name: 'Marcela' },
    ];
  }

  getPersonByID(_id: number) {
    const people = this.getPeople();
    for (let i = 0; i < people.length; i++) {
      if (_id === people[i].id) {
        console.log(people[i]);
        return people[i];
      }
    }
    return null;
  }
}
