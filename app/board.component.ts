import { Component }        from '@angular/core';

import { WebsocketService } from './websocket.service';
import { Cell }             from './cell.component';
import { CELLS }            from './CELLS';

@Component({
	moduleId:module.id
	selector: 'my-board',
	styleUrls: ['./board.component.css'],
	templateUrl: './board.component.html',
})
export class BoardComponent {
    cells = CELLS;
    player1 = 'Spieler 1';
    player2 = 'Spieler 2';
    player1Points = '0';
    player2Points = '0';
	text = 'Bitte Websocket starten und warten bis die Verbindung hergestellt wurde!';
	
	
	constructor(private ws: WebsocketService) {}

    public onSendCell(cell: Cell): void {
        this.text = this.text + "\n" + "Set on: " + cell.id;
        this.ws.sendMessage(cell.id);
    }

    public startWebsocket(): void {
        this.text = this.text + "\n" + "run Websocket";
        this.ws.initWebsocket('ws://localhost:9000/ws');
	}
}
