import { Component, OnInit } from '@angular/core';
import { MyService } from '../myservice.service';
import { Person } from '../person';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {

  people: Person[] = [];

  peopleHttp: Person[] = [];

  constructor(private myservice: MyService) {
  }

  ngOnInit() {
    this.people = this.myservice.getPeople();
    this.peopleHttp = this.myservice.getPeopleHttp();
    console.log(this.peopleHttp);
  }

}
