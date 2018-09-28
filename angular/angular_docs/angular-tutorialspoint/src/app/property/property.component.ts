import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css']
})
export class PropertyComponent implements OnInit {

  months = ['January', 'Feburary', 'March', 'April', 'May',
    'June', 'July', 'August', 'September',
    'October', 'November', 'December'];

  isAvailable = true;

  selectedMonth;

  constructor() { }

  ngOnInit() {
    this.selectedMonth = this.months[0];
  }

  changeMonths(event) {
    console.log(event.target.value);
    this.selectedMonth = event.target.value;
  }
}
