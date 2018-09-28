import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngclass-directive',
  templateUrl: './ngclass-directive.component.html',
  styleUrls: ['./ngclass-directive.component.scss']
})
export class NgclassDirectiveComponent implements OnInit {

  favorite1 = false;
  favorite2 = false;

  constructor() { }

  ngOnInit() {
  }

  setFavorite1() {
    this.favorite1 = !this.favorite1;
  }

  setFavorite2() {
    this.favorite2 = !this.favorite2;
  }

}
