import { Component } from '@angular/core';

import { Cell } from './cell.component';

@Component({
	selector: 'board',
	template: `
            <table class="center">
            <tr>
				<cell>Game Cell</cell>
            </tr>
            </table>`,
})
export class Board {
	cells[]: Cell;
	
	constructor(
		private WebsocketService;
		private controller;
		private length: number;
	) {}

}
