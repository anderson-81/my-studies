import { Component, OnInit } from '@angular/core';

// import { Observable } from 'rxjs';

@Component({
  selector: 'app-pipes-examples',
  templateUrl: './pipes-examples.component.html',
  styleUrls: ['./pipes-examples.component.css']
})
export class PipesExamplesComponent implements OnInit {
  person: any = {
    id: 123,
    name: 'anderson c.',
    email: 'anderson@yyy.com',
    salary: 4321.11,
    status: true,
    gender: 'm',
    birthday: new Date(1981, 10, 12),
    address: {
      name: 'Hamilton Avenue',
      num: 2065,
      city: 'San Jose'
    }
  };

  people: string[] = ['Anderson', 'Mara', 'Joana', 'Tania', 'Adriana'];

  filter = '';

  constructor() { }

  AddPerson(name: string) {
    console.log(name);
    console.log(this.people);
    this.people.push(name);
  }

  getPeople() {
    if (
      this.people.length === 0 ||
      this.filter === undefined ||
      this.filter.trim() === ''
    ) {
      return this.people;
    }

    return this.people.filter(v => {
      if (v.toLowerCase().indexOf(this.filter.toLowerCase()) >= 0) {
        return true;
      }
      return false;
    });
  }

  // tslint:disable-next-line:member-ordering
  valAsync1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('ASSINCRONOUS VALUE 01'), 2000);
  });

  // tslint:disable-next-line:member-ordering
  // valAsync2 = Observable.interval(2000).map(value => 'ASSINCRONOUS VALUE 02');

  ngOnInit() { }
}
