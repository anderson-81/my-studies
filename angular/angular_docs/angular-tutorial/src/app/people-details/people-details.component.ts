import { Component, OnInit, Input } from '@angular/core';
import { Person } from '../people/person';
import { ActivatedRoute } from '@angular/router';
import { PeopleService } from '../people/people.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-people-details',
  templateUrl: './people-details.component.html',
  styleUrls: ['./people-details.component.css']
})
export class PeopleDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private peopleService: PeopleService,
    private location: Location) { }

  // Para poder ser atribuido na tag do componente.
  @Input() person: Person;

  ngOnInit() {
    this.getPeople();
  }

  getPeople(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.peopleService.getPersonByID(id)
      .subscribe(person => this.person = person);
  }

  goBack(): void {
    this.location.back();
  }
}
