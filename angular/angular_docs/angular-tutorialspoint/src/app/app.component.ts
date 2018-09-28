import { Component, OnInit } from '@angular/core';
import { Person } from './person';
import { MyService } from './myservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Angular 6 Project!';
  ngOnInit() {
  }
}
