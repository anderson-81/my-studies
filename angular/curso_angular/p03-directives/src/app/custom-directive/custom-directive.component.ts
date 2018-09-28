import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-directive',
  templateUrl: './custom-directive.component.html',
  styleUrls: ['./custom-directive.component.scss']
})
export class CustomDirectiveComponent implements OnInit {
  show = false;
  text = '';

  constructor() { }

  ngOnInit() {
    this.text = 'Show';
  }

  ToggleList() {
    this.show = !this.show;
    if (this.show) {
      this.text = 'Hide';
    } else {
      this.text = 'Show';
    }
  }
}
