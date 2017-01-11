import { NgModule }            from '@angular/core';
import { BrowserModule }       from '@angular/platform-browser';
import { FormsModule }         from '@angular/forms';

import { WebSocketService }    from './websocket.service';

import { BoardComponent }      from './board.component';
import { CellComponent }       from './cell.component';

@NgModule({
  imports:      [ BrowserModule,
				  FormsModule
				],
  declarations: [ CellComponent,
				  BoardComponent
				],
  providers:    [ WebSocketService ],
  bootstrap:    [ BoardComponent ]
})
export class AppModule { }
