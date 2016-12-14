import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { AppMK }         from './app.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppMK ],
  bootstrap:    [ AppMK ]
})
export class AppModule { }
