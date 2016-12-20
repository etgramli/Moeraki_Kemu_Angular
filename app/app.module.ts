import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule }  from '@angular/router';
import { routing }       from './app.routes';

import { AppComponent }  from './app.component';
import { AppMK }         from './app.component';

@NgModule({
  imports:      [ BrowserModule, RouterModule, routing ],
  declarations: [ AppMK ],
  bootstrap:    [ AppMK ]
})
export class AppModule { }
