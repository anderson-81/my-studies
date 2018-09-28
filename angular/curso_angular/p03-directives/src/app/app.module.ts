import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NewComponentComponent } from './new-component/new-component.component';
import { NgifDirectiveComponent } from './ngif-directive/ngif-directive.component';
import { NgswitchDirectiveComponent } from './ngswitch-directive/ngswitch-directive.component';
import { NgforDirectiveComponent } from './ngfor-directive/ngfor-directive.component';
import { NgclassDirectiveComponent } from './ngclass-directive/ngclass-directive.component';
import { NgstyleDirectiveComponent } from './ngstyle-directive/ngstyle-directive.component';
import { ElvisOperatorComponent } from './elvis-operator/elvis-operator.component';
import { NgcontentDirectiveComponent } from './ngcontent-directive/ngcontent-directive.component';
import { MyDirectiveDirective } from './shared/my-directive.directive';
import { CustomDirectiveComponent } from './custom-directive/custom-directive.component';
import { HighlightMouseDirective } from './shared/highlight-mouse.directive';
import { HighlightDirective } from './shared/highlight.directive';
import { NgelseDirectiveDirective } from './shared/ngelse-directive.directive';

@NgModule({
  declarations: [
    AppComponent,
    NewComponentComponent,
    NgifDirectiveComponent,
    NgswitchDirectiveComponent,
    NgforDirectiveComponent,
    NgclassDirectiveComponent,
    NgstyleDirectiveComponent,
    ElvisOperatorComponent,
    NgcontentDirectiveComponent,
    MyDirectiveDirective,
    CustomDirectiveComponent,
    HighlightMouseDirective,
    HighlightDirective,
    NgelseDirectiveDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
