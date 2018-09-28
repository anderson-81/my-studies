// Neste arquivo, estarao os modulos de funcionalidade de (people).

import { NgModule } from '@angular/core';
import { PeopleComponent } from './people.component';
import { PersonDetailsComponent } from './person-details/person-details.component';
import { PersonNotfoundComponent } from './person-notfound/person-notfound.component';
import { PeopleService } from './people.service';
import { CommonModule } from '@angular/common';
// import { RouterModule } from '@angular/router';
import { PeopleRoutingModule } from './people.routing.module';

@NgModule({
    // Coloco os imports do proprio angular 2:
    // Nao preciso usar o RouterModule aqui!!!!
    imports: [CommonModule, PeopleRoutingModule],
    // Declaro meus componentes do módulo:
    declarations: [PeopleComponent, PersonDetailsComponent, PersonNotfoundComponent],
    // Serviços utilizados:
    providers: [PeopleService]
})
export class PeopleModule { }
