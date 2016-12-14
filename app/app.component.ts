import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1>`,
})
export class AppComponent  { name = 'Angular'; }


@Component({
	selector: 'moeraki-kemu',
	template `<h1>Greetings from Moeraki Kemu</h1>
	<p>1 + 2 = {{1+2}}</p>`,
})
export class AppMK{}
