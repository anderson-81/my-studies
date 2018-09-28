import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DataBindingComponent } from './data-binding/data-binding.component';

import { AlertModule } from 'ngx-bootstrap';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';

//Importando para trabalhar com formulários.
import { FormsModule } from '@angular/forms';

//Componente de formulário de outro módulo.
import { MyFormComponent } from './my-form/my-form.component';

//Trabalhando com Input-Property
import { InputPropertyComponent } from './input-property/input-property.component';
import { OutputPropertyComponent } from './output-property/output-property.component';
import { CicleComponent } from './cicle/cicle.component';

@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
    EventBindingComponent,
    TwoWayBindingComponent,
    MyFormComponent,
    InputPropertyComponent,
    OutputPropertyComponent,
    CicleComponent
  ],
  imports: [
    BrowserModule, AlertModule.forRoot(), FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}


