import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-second-component',
  templateUrl: './my-second.component.html',
  styleUrls: ['./my-second.component.css']
})
export class MySecondComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    alert("Initializing second component...");
  }

}

/*
  O Angular segue o conceito de WebComponent.
  

*/