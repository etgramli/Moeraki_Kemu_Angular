import { NgModule }            from '@angular/core';
import { BrowserModule }       from '@angular/platform-browser';
import { FormsModule }         from '@angular/forms';

import { WebsocketService }    from './websocket.service';

import { BoardComponent }      from './board.component';
import { CellComponent }       from './cell.component';

@NgModule({
  imports:      [ BrowserModule,
				  FormsModule
				],
  declarations: [ CellComponent,
				  BoardComponent
				],
  providers:    [ WebsocketService ],
  bootstrap:    [ BoardComponent ]
})
export class AppModule { }
