import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  title:string = "Interpolação / Interpolation";
  booleanVal = true;
  urlImage = "http://picsum.photos/200/300";

  getValue(){
    return 36;
  }

  getBoolean(){
    return true;
  }

  constructor() { }

  ngOnInit() {
  }

  nome:string = "Anderson";

  //Trabalhando com variavel inicial:
  valorInicial:number = 51;

  //Disparando o evento quando valor mudado:
  onChangeNumber(event){
    console.log(event)
  }
}
