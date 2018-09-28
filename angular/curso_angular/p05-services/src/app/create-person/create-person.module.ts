import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// import { PeopleService } from '../people/people.service';
import { CreatePersonComponent } from './create-person.component';

import { ReceivePeopleComponentComponent } from '../receive-people-component/receive-people-component.component';

@NgModule({
  declarations: [CreatePersonComponent, ReceivePeopleComponentComponent],
  imports: [CommonModule],
  exports: [CreatePersonComponent]
  // providers: [PeopleService] // Escopo somente escopo da pasta.
})
export class CreatePersonModule {
}

// O serviço quando colocado no providers, o objeto dele so
// sera criado uma vez.
