import { Component } from '@angular/core';

@Component({
	selector: 'cell',
	template: `<th class="gameCell" id="coords">&nbsp;</th>`,
})
export class Cell {
	
	constructor(
		private coords: string,
		private playerString: string) {}
	
	public getPlayerString(): string {
		return this.playerString;
	}
	public getCoords(): string {
		return this.coords;
	}
	
}
