import { Injectable }      from '@angular/core';

import { Observable }      from 'rxjs/Observable';


Injectable()
export class WebsocketService {

    ws: WebSocket;

    public initWebsocket(url: string): void {
        this.ws = new WebSocket(url);
        this.ws.onopen = (event: Event) => {
            this.onOpen(event);
        }
        this.ws.onclose = (event: Event) => {
            this.onClose(event);
        }
        this.ws.onerror = (event: Event) => {
            this.onClose(event);
        }
        this.ws.onmessage = (event: Event) => {
            this.onMessage(event);
        }
    }

    private onOpen(event: Event): void {
        alert("Verbindung hergestellt");
    }

    private onClose(event): void {
        alert("Verbindung geschlossen");
    }

    private onError(event): void {
        alert("Ein Fehler ist aufgetreten" + event);
    }

    private onMessage(event): void {
        var jsonData = JSON.parse(event.data);
        var lines = jsonData.lines;
        var player1 = jsonData.player1;
        var player2 = jsonData.player2;
        var player1Points = jsonData.player1Points;
        var player2Points = jsonData.player2Points;

        for (var i = 0; i < lines.length; i++) {
            var line = lines[i];
            var cells = line.cells;
            for (var j = 0; j < cells.length; j++) {
                var cell = cells[j];
                if (cell == "StartDot") {
                    document.getElementById(i + '-' + j).className += " startDot ";
                }
                else if (cell == player1) {
                    document.getElementById(i + '-' + j).className += " player1Dot ";
                }
                else if (cell == player2) {
                    document.getElementById(i + '-' + j).className += " player2Dot ";
                }
            }
        }
        document.getElementById("player1Points").innerHTML = player1Points;
        document.getElementById("player2Points").innerHTML = player2Points;
    }

    public sendMessage(msg): void {
        this.ws.send('setDot' + JSON.stringify(msg));
    }

}
