import { Component, OnInit } from '@angular/core';
import { Person } from '../person';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {

  public text;
  public people: Person[];
  public salary: number;
  public todayDate: Date;
  public num: number;

  ngOnInit() {
    this.text = 'Hello, World!';
    this.salary = 5432.11;
    this.people = [
      new Person(1, 'Anderson'),
      new Person(2, 'Natalia'),
      new Person(3, 'Lucia'),
      new Person(4, 'Vera'),
      new Person(5, 'Paula'),
      new Person(6, 'Renata'),
    ];
    this.todayDate = new Date();
    this.num = 432654123;
  }

}
