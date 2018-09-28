import { Input, Component, OnInit, OnChanges, OnDestroy, DoCheck, AfterViewChecked, AfterViewInit, AfterContentChecked, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-cicle',
  templateUrl: './cicle.component.html',
  styleUrls: ['./cicle.component.css']
})

//Importando e implementando as interfaces (Boas praticas!!!)
export class CicleComponent implements OnInit,
  OnChanges,
  OnDestroy,
  DoCheck,
  AfterViewChecked,
  AfterViewInit,
  AfterContentChecked,
  AfterContentInit {

  @Input() initial_cicle_value: number = 10;

  constructor() {
    console.log("Executing Constructor...");
  }

  //Normalmente, método para buscar os 
  //  dados para mostrar no template.
  ngOnInit() {
    console.log("Executing ngOnInit...");
  }

  //ngOnChange => Importante quando trabalha com @Input().
  ngOnChanges() {
    console.log("Executing ngOnChanges...");
  }

  ngDoCheck() {
    console.log("Executing ngDoCheck...");
  }

  //ngOnDestroy => Liberar recursos principalment de servidores.
  ngOnDestroy() {
    console.log("Executing ngOnDestroy...");
  }

  ngAfterContentChecked() {
    console.log("Executing ngAfterContentChecked...");
  }

  ngAfterContentInit() {
    console.log("Executing ngAfterContentInit...");
  }

  ngAfterViewChecked() {
    console.log("Executing ngAfterViewChecked...");
  }

  ngAfterViewInit() {
    console.log("Executing ngAfterViewInit...");
  }

  
}
