import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngif-directive',
  templateUrl: './ngif-directive.component.html',
  styleUrls: ['./ngif-directive.component.scss']
})
export class NgifDirectiveComponent implements OnInit {

  people: string[] = ['Anderson', 'Laura', 'Carlos', 'Joana'];

  show = false;
  text = 'Show';

  constructor() { }

  ngOnInit() {
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
