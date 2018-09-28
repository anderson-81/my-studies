import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styles: [`
      .highlight{
          color:white;
          background-color: red;
          font-weight: bold;
      }`
  ]
})
export class EventBindingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  ShowMessage():void{
    alert("Hello, World!");
  }

  /*
  onKeyUp(event){
    console.log(event);
  }
  */

  currentValue;
  savedValue;
  isMouseOver = false;

  onKeyUp(event:KeyboardEvent){
    var result:string = (<HTMLInputElement>(event.target)).value;
    console.log(result);
    this.currentValue = result;
  }

  SaveValue(value){
    this.savedValue = value;
  }

  OnMouseOverOut(){
    !this.isMouseOver;
    console.log("Change boolean");
  }

}

