import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor() { }

  GetPeople(){
    return ["Anderson","Maura","Paula","Adriana"];
  }

  //Todo serviço precisa ser declarado como:
     //providers:[<nome_do_servico_01>,<nome_do_servico_02>,...]
}
