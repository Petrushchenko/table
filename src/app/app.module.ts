import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { HttpClientModule} from '@angular/common/http';

import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';

import { InMemoryDataService } from './api/in-memory-data.service';


import { ColorTableComponent } from './color-table/color-table.component';
import { ColorService } from './services/color.service'

@NgModule({
  declarations: [
    AppComponent,
    ColorTableComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,

    // remove this when real api will be ready
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, {dataEncapsulation: false}
    )
  ],
  providers: [ColorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
