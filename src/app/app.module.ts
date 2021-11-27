import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { registerLocaleData } from '@angular/common';
import localeRu from '@angular/common/locales/ru';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import {MultByPipe} from "./pipes/mult-by.pipe";
import {StringNameFormatPipe} from "./pipes/string-name-format.pipe";
import { ExMarksPipe } from './pipes/ex-marks.pipe';
import { FilterPostsPipe } from './pipes/filter-posts.pipe';

registerLocaleData(localeRu, 'ru')

@NgModule({
  declarations: [
    AppComponent,
    MultByPipe,
    StringNameFormatPipe,
    ExMarksPipe,
    FilterPostsPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'ru' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
