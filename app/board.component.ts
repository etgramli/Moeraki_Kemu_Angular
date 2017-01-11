import { Component }        from '@angular/core';

import { Subject }          from 'rxjs/Subject';

import { WebSocketService } from './websocket.service';
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
	
	
	constructor(private ws: WebSocketService) {
		this.length = 8;
	}

}
