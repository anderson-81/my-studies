import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NewCmpComponent } from './new-cmp/new-cmp.component';
import { ChangetextDirective } from './changetext.directive';
import { MySqrt } from './app.sqrt';

import { Routes, RouterModule } from '@angular/router';
import { MyService } from './myservice.service';
import { PropertyComponent } from './property/property.component';
import { EventComponent } from './event/event.component';
import { PipeComponent } from './pipe/pipe.component';
import { ServiceComponent } from './service/service.component';
import { DirectivesComponent } from './directives/directives.component';

import { HttpCmpComponent } from './http-cmp/http-cmp.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsComponent } from './forms/forms.component';
import { AnimationComponent } from './animation/animation.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

export const appRoutes: Routes = [
  { path: 'property', component: PropertyComponent },
  { path: 'event', component: EventComponent },
  { path: 'directives', component: DirectivesComponent },
  { path: 'pipe', component: PipeComponent },
  { path: 'services', component: ServiceComponent },
  { path: 'newcmp', component: NewCmpComponent },
  { path: 'httpcmp', component: HttpCmpComponent },
  { path: 'forms', component: FormsComponent },
  { path: 'animation', component: AnimationComponent },
  { path: '', pathMatch: 'full', redirectTo: 'newcmp' }
];


@NgModule({
  declarations: [
    AppComponent,
    NewCmpComponent,
    ChangetextDirective,
    MySqrt,
    PropertyComponent,
    EventComponent,
    PipeComponent,
    ServiceComponent,
    DirectivesComponent,
    HttpCmpComponent,
    FormsComponent,
    AnimationComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [MyService],
  bootstrap: [AppComponent]
})
export class AppModule {

}
