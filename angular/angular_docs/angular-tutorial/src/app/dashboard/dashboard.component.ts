import { OnInit, OnDestroy, Component } from '@angular/core';
import { PeopleService } from '../people/people.service';
import { Person } from '../people/person';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {

  people: Person[] = [];

  subs: Subscription;

  constructor(private peopleService: PeopleService) { }

  ngOnInit() {
    this.getPeople();
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  getPeople(): void {
    this.subs = this.peopleService.getPeopleObservable().subscribe(people => {
      this.people = people.slice(1, 5);
    });
  }
}
