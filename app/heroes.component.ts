import { Component }   from '@angular/core';
import { OnInit }      from '@angular/core';
import { Router  }     from '@angular/router';
import { Hero }        from './hero';
import { HeroService } from './hero.service';


@Component({
  moduleId:    module.id,
  selector:    'my-heroes',
  styleUrls:   [ 'heroes.component.css' ],
  templateUrl: 'heroes.component.html',
  providers:   [HeroService],
})
export class HeroesComponent implements OnInit {

	selectedHero: Hero;
	heroes: Hero[];
	
	constructor(
		private router: Router,
		private heroService: HeroService) {}
	
	getHeroes(): void {
		this.heroService.getHeroes().then(heroes => this.heroes = heroes);
	}

	onSelect(hero: Hero): void {
		this.selectedHero = hero;
	}

	ngOnInit(): void {
		this.getHeroes();
	}

	gotoDetail(): void {
		this.router.navigate(['/detail', this.selectedHero.id]);
	}

}


@Component({
	selector: 'moeraki-kemu',
	template `<h1>Greetings from Moeraki Kemu</h1>
	<board></board>`,
})
export class AppMK {}


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
