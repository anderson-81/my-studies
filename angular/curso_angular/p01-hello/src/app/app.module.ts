//Prepara a aplicação para rodar no browser;
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Para trabalhar com formulários.
import {FormsModule} from '@angular/forms';
//Para trabalhar com requições AJAX.
import {HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { MyFirstComponent } from './my-first/my-first.component';
import { MySecondComponent } from './my-second/my-second.component';
import { PeopleModule } from 'src/app/people/people.module';


@NgModule({
  declarations: [
    AppComponent,
    MyFirstComponent,
    MySecondComponent
  ],
  imports: [
    BrowserModule,
    FormsModule /*(importado manualmente)*/,
    HttpModule /*(importado manualmente)*/,
    PeopleModule
  ],
  providers: [] /*Onde ficaram os serviços para toda aplicação*/,
  bootstrap: [AppComponent] /*Rotas, menu, centro da aplicação*/
})
export class AppModule { }
/*Esse é o chamado módulo de raiz.*/

//Não consigo usar o person-details aqui.
//Assim é mostrado o conceito de encapsulamento de módulos no Angular.
