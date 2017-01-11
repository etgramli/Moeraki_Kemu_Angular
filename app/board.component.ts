import { Component }        from '@angular/core';

import { WebsocketService } from './websocket.service';
import { CellComponent }    from './cell.component';

@Component({
	selector: 'my-board',
	template: `
            <table class="center">
				<tbody>
				</tbody>
			</table>
`,
})
export class BoardComponent {
	private cells[8][8]: CellComponent;
	private length: number;
	
	Subject<MessageEvent> subject;
	
	constructor(private ws: WebsocketService;) {
		this.length = 8;
		this.subject = ws.concect();
	}

}
