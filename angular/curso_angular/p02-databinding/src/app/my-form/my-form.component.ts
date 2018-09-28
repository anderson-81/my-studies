import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css']
})
export class MyFormComponent implements OnInit {

  constructor() { }

  //Criando um objeto sem classe específica.
  person:any = {
    id:432,
    name:"Anderson",
    address:{
      name:"Street Town",
      number:36
    }
  }


  ngOnInit() {
  }

}
