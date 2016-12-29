import { Component } from '@angular/core';

export class Hero {
	id: number;
	name: string;
}

@Component({
  selector: 'my-app',
  template: `<h1>{{name}}</h1>
             <h2>{{hero.name}} ({{hero.id}})</h2>
			 <div><label>id: </label>{{hero.id}}</div>
			 <div><label>name: </label><input [(ngModel)]="hero.name" placeholder="name"> </div>`,
})
export class AppComponent  { name = 'Angular'; hero: Hero = {id:1,name: 'Hanswurscht'} }


@Component({
	selector: 'moeraki-kemu',
	template `<h1>Greetings from Moeraki Kemu</h1>
	<p>1 + 2 = {{1+2}}</p>`,
})
export class AppMK {}


@Component({
	selector: 'board',
	template: `
            <table class="center">
            <tr>
            </tr>
            </table>`,
})
export class Board {
	private websocket;
	private controller;
	private length: number;
}

@Component({
	selector: 'cell',
	template: `<th class="gameCell" id="@i-@j">&nbsp;</th>`,
})
export class Cell {
	private coords: string;
	private playerString: string;
}
