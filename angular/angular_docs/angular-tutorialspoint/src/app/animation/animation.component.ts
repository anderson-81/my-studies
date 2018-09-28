import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.css'],
  animations: [
    trigger('myanimation', [
      state('smaller', style({
        transform: 'translateY(100px)'
      })),
      state('larger', style({
        transform: 'translateY(0px)'
      })),
      transition('smaller <=> larger', animate('300ms ease-in'))
    ])
  ]
})
export class AnimationComponent implements OnInit {

  constructor() { }

  state = 'smaller';

  ngOnInit() {
  }
  animate() {
    this.state = this.state === 'larger' ? 'smaller' : 'larger';
  }
}
