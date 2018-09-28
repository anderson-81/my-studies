import { Component, OnInit, Input, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent implements OnInit {

  @Input() input_value: number = 0;

  //Criando evento para avisar ao componente 
  //  pai a execução do método:
  @Output() changeNumber = new EventEmitter();

  //Preciso passar o nome da variável gerada na tag.
  //@ViewChild('fieldInput') fieldInputValue : HTMLElement;

  @ViewChild('fieldInput') fieldInputValue : ElementRef;

  constructor() { }

  ngOnInit() {
  }

  Increment() {
    //Primeira versão:
        //console.log(this.fieldInputValue);
        //this.input_value++;
      //Disparando o evento para o PAI:
        //this.changeNumber.emit({ changeValue: this.input_value })

    this.fieldInputValue.nativeElement.value++;
    this.changeNumber.emit({ changeValue: this.fieldInputValue.nativeElement.value++ });
  }

  Decrement() {
    //Primeira versão:
        //console.log(this.fieldInputValue);
        //this.input_value--;
      //Disparando o evento para o PAI:
        //this.changeNumber.emit({ changeValue: this.input_value })
    
    this.fieldInputValue.nativeElement.value--;
    this.changeNumber.emit({ changeValue: this.fieldInputValue.nativeElement.value-- });
  }
}
