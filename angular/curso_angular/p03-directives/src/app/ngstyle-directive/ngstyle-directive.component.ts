import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngstyle-directive',
  templateUrl: './ngstyle-directive.component.html',
  styleUrls: ['./ngstyle-directive.component.scss']
})
export class NgstyleDirectiveComponent implements OnInit {

  active1 = false;

  active2 = false;

  constructor() { }

  ngOnInit() {
  }

  ChangeProperties1() {
    this.active1 = !this.active1;
  }

  ChangeProperties2() {
    this.active2 = !this.active2;
  }
}
