import { Component } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { ROUTER_DIRECTIVES, Router, Routes } from '@angular/router';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1>`,
})
export class AppComponent  { name = 'Angular'; }


@Component({
	selector: 'moeraki-kemu',
	template `<h1>Greetings from Moeraki Kemu</h1>
	<p>1 + 2 = {{1+2}}</p>
	<a >Click here to Signup</a>`,
})
export class AppMK {
	constructor(public router : Router) {}
}


@Component({
  selector: 'manual',
  template: `<h1>Spielanleitung - Angular</h1>
    <h2>Kurzbeschreibung</h2>
        <p class="Kurzbeschreibung">
            Die Spieler treten als Oberhaupt eines Maori-Stammes im Süden Neuseelands gegeneinander an, um ihren Anspruch auf einen heiligen Strandabschnitt
            zu beweisen. Da die Oberhäupter ihren Anspruch durch ein Spiel ermitteln, ist dieses Zusammentreffen friedlich.
            In diesem Spiel versuchen die Häuptlinge entweder durch eine besondere Konstellation an Spielsteinen ein vorzeitiges Spielende und den Spielsieg oder 
            die Mehrheit bei den meisten Strandfeldern auf dem Spielfeld zu erlangen und sodurch Punkte zu gewinnen.
        </p>
    <h2>Einführung</h2>
    <h3>Spielmaterial</h3>
      <ul class="Spielmaterial">
        <li>1 Moeraki-Kugel</li>
        <li>32 Spielsteine pro Spieler</li>
      </ul>
    <h3>Moeraki-Kugel</h3>
      <p class="Moeraki-Kugel">
        Ein neutraler Spielstein, welcher vom Startspieler in eine der 9 zentralen Mulden des Spielfelds gelegt wird. Die Moeraki-Kugel kann von allen genutzt werden, aber zählt nicht bei der Ermittlung von Mehrheiten auf den Strandfeldern mit.
      </p>
    <h3>Spielfeld</h3>
      <p class="Spielfeld">
         Das Spielfeld bietet 64 Mulden zum Ablegen der Spielsteine oder der Moeraki-Kugel. Die Moeraki-Kugel muss im Zentrum abgelegt werden.
         Die einzelnen quadratischen bzw. am Rand rechteckigen Felder sind Standfelder. Die Hoheit über ein Strandfeld kann ein Spieler durch die Mehrheit an 
         Spielsteinen an seinen Ecken (Mulden) erlangen. Die Anzeige erfolgt dabei durch die Stammesplättchen.
         Bei Gleichstand an Spielsteinen bleibt ein Strandfeld leer.</p>
         
    <h2>Wie man spielt</h2>
    <h3>Spielverlauf</h3>
      <ol class="Spielverlauf">
        <li>Der erste Spieler legt die Moeraki-Kugel in eine der 4 zentralen Mulden.</li>
        <li>Abwechselnd legt jeder Spieler einen seiner Spielsteine in eine beliebige freie Mulde.</li>
        <li>Wird ein neues Quadrat aus Spielsteinen gelegt, so wird es gewertet: Der Spieler mit der Mehrheit bekommt einen Punkt.</li>
      </ol>
    <h3>Spielende</h3>
      <p class="Spielende">Es gibt folgende Gewinnbedingungen:</p>
      <ul class="Spielende">
        <li>Wenn ein Spieler 4 Steine zu einem Quardat legen kann, gewinnt er.</li>
        <li>Ein Spieler legt eine durchgehendeLinie von dem Startpunkt in der Mitte bis zum Rand.</li>
        <li>Ist das Feld voll gelegt, gewinnt der Spieler mit den meisten Punkten.</li>
      </ul>`,
})
export class Manual {
  constructor(public router: Router, public http: Http) {}
}


@Component({
  selector: 'board',
  template: `<h1>Spielbrett - Angular</h1>
			<div class="table-responsive">
            <table class="center">
            @for(i <- 0 until 8) {
            <tr>
                @for(j <- 0 until 8) {
                <th class="gameCell" id="@i-@j">&nbsp;</th>
                }
            </tr>
            }
            </table>
        </div>
        
        </table>`,
})
export class Board {
  constructor(public router: Router, public http: Http) {}
}
