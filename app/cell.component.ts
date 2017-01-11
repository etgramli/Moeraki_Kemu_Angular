import { Component } from '@angular/core';

@Component({
	selector: 'cell',
	template: `<th class="gameCell" id="coords">&nbsp;</th>`,
})
export class CellComponent {
	
	color: string;
	playerString: string;
	
	constructor(private coords: string) {}
	
	public getPlayerString(): string {
		return this.playerString;
	}
	public getCoords(): string {
		return this.coords;
	}
	
}
