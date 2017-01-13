import { NgModule }         from '@angular/core';
import { BrowserModule }    from '@angular/platform-browser';
import { FormsModule }      from '@angular/forms';
import { HttpModule }       from '@angular/http';

import { WebsocketService } from './websocket.service';

import { BoardComponent }   from './board.component';
import { Cell }             from './cell.component';

@NgModule({
  imports:      [ BrowserModule,
				  FormsModule,
				  HttpModule
				],
  declarations: [ BoardComponent
				],
  providers:    [ WebsocketService ],
  bootstrap:    [ BoardComponent ]
})
export class AppModule { }
