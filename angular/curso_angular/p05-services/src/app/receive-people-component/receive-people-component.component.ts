import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../people/people.service';

@Component({
  selector: 'app-receive-people-component',
  templateUrl: './receive-people-component.component.html',
  styleUrls: ['./receive-people-component.component.css']
})
export class ReceivePeopleComponentComponent implements OnInit {

  person: string;

  constructor(private _peopleService: PeopleService) { }

  ngOnInit() {
    this._peopleService.emitterPeopleCreated.subscribe(
      personCreated => this.person = personCreated
    );
  }
}
