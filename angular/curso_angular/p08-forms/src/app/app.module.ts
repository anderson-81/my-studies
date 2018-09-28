import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
// import { TemplateFormComponent } from './template-form/template-form.component';
// import { DataFormComponent } from './data-form/data-form.component';
import { TemplateFormModule } from './template-form/template-form.module';
// import { ReactiveFormsModule } from '@angular/forms';
import { DataFormModule } from './data-form/data-form.module';

@NgModule({
  declarations: [
    AppComponent,
    // TemplateFormComponent,
    /// DataFormComponent,
  ],
  imports: [
    BrowserModule,
    // FormsModule,
    HttpModule,
    AppRoutingModule,
    TemplateFormModule,
    // ReactiveFormsModule // Usado nos formularios reactivos.
    DataFormModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
