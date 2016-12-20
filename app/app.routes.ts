import {ROUTER_DIRECTIVES, Router, Routes} from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import {AppMK} from ./app.component
import {Manual} from ./app.component
import {Board} from ./app.component

export const routes : Routes = [
{path: '',       component: AppMK},
{path: 'manual', component: Manual},
{path: 'board',  component: Board},
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
