import { Component } from '@angular/core';

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
	constructor(
		private WebsocketService;
		private controller;
		private length: number;
	) {}

}
