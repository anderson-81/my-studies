import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngfor-directive',
  templateUrl: './ngfor-directive.component.html',
  styleUrls: ['./ngfor-directive.component.scss']
})
export class NgforDirectiveComponent implements OnInit {

  people: string[] = ['Anderson', 'Antonia', 'Giovana', 'Fernanda'];

  constructor() { }

  i = 0;

  person;

  ngOnInit() {
    for (let i = 0; i < this.people.length; i++) {
      this.person = this.people[i];
    }
  }
}
