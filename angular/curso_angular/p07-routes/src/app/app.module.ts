import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
// import { PeopleComponent } from './people/people.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
// import { routing } from './app.routing';
// import { PersonDetailsComponent } from './people/person-details/person-details.component';
// import { PeopleService } from './people/people.service';
// import { PersonNotfoundComponent } from './people/person-notfound/person-notfound.component';
import { AppRoutingModule } from './app.routing.module';
import { AuthService } from './login/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { PeopleGuard } from './guards/people.guard';
// import { VeiculesGuard } from './veicules/veicules.guard';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
// import { PeopleModule } from './people/people.module';
// import { VeiculesComponent } from './veicules/veicules.component';
// import { VeiculesModule } from './veicules/veicules.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    PagenotfoundComponent,
    // VeiculesComponent,
    // PeopleComponent,
    // PersonDetailsComponent,
    // PersonNotfoundComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    // PeopleModule, // Comentei porque ele agora passou a ser carregado sob demanda (lazy loading).
    // VeiculesModule, // Comentei porque ele agora passou a ser carregado sob demanda (lazy loading).
    AppRoutingModule
    // routing // importando as rotas.
  ],
  // providers: [PeopleService],
  bootstrap: [AppComponent],
  providers: [AuthService, AuthGuard, PeopleGuard, /* VeiculesGuard */],
})
export class AppModule { }
