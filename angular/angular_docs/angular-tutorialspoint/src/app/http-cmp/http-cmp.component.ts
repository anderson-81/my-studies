import { Component, OnInit } from '@angular/core';
import { Person } from '../person';
import { MyService } from '../myservice.service';

@Component({
  selector: 'app-http-cmp',
  templateUrl: './http-cmp.component.html',
  styleUrls: ['./http-cmp.component.css']
})
export class HttpCmpComponent implements OnInit {

  constructor(public people: Person[], private myService: MyService) { }

  ngOnInit() {
  }

}
