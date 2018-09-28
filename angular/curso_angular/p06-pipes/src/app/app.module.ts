import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PipesExamplesComponent } from './pipes-examples/pipes-examples.component';
import { CamelCasePipe } from './camel-case.pipe';
import { StatusTextPipe } from './status-text.pipe';
import { SettingsService } from './settings.service';
import { FilterArrayPipe } from './filter-array.pipe';
import { FilterArrayImpurePipe } from './filter-array-impure.pipe';

// Internacionalization i18n
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    PipesExamplesComponent,
    CamelCasePipe,
    StatusTextPipe,
    FilterArrayPipe,
    FilterArrayImpurePipe
  ],
  imports: [BrowserModule, FormsModule, HttpModule],
  providers: [

    /*
    {
      provide: LOCALE_ID,
      useValue: 'pt-BR'
    }
    */

    SettingsService,
    {
      provide: LOCALE_ID,
      deps: [SettingsService],
      useFactory: (settingsService) => settingsService.getLocale()
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
