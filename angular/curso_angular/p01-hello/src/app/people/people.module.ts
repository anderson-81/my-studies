import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeopleComponent } from './people.component';
import { PersonDetailsComponent } from './person-details/person-details.component';

//Serviço declarado em providers:
import { PeopleService } from './people.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PeopleComponent, PersonDetailsComponent] /*Já importando*/,
  exports:[
    PeopleComponent /*Passa a ser visível a outros módulos*/
  ],
  providers:[PeopleService] /*DECLARAÇÃO MANUAL*/
})
export class PeopleModule { } //Preciso declarar também em AppModule

/*Módulo de funcionalidade*/