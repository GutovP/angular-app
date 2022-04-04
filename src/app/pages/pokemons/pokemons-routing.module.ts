import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { PokemonsDetailsComponent } from './pokemons-details/pokemons-details.component';
import { PokemonsListComponent } from './pokemons-list/pokemons-list.component';

const routes: Routes = [
  {
    path: '',
    component: PokemonsListComponent,
  },

  {
    path: ':name',
    component: PokemonsDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PokemonsRoutingModule {}
