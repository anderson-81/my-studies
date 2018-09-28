import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PeopleComponent } from './people/people.component';
// import { PeopleService } from './people/people.service';
import { CreatePersonModule } from './create-person/create-person.module';
import { LogServiceService } from './shared/log-service.service';

@NgModule({
  declarations: [AppComponent, PeopleComponent],
  imports: [BrowserModule, FormsModule, HttpModule, CreatePersonModule],
  // providers: [PeopleService], // Escopo para toda aplicação.
  providers: [LogServiceService],
  bootstrap: [AppComponent]
})
export class AppModule {}

// O serviço quando colocado no providers, o objeto dele so
// sera criado uma vez.
