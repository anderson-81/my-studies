import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'p02-databinding';

  //Valor para cicle
  value_cicle : number = 5;

  ChangeCicleValue(){
    this.value_cicle++;
  }

  /*
    Observar os métodos executados após clique do botão:
      Executing ngOnChanges... (Utilizado na mudaça do property!!!)
      Executing ngDoCheck...
      Executing ngAfterContentChecked...
      Executing ngAfterViewChecked...
  */

  deleteCicle : boolean = false;

  DestroyCicle(){
    this.deleteCicle = true;
    alert("Cicle destroyed.");
  }
}
