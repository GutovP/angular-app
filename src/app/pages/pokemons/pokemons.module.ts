import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxPaginationModule } from 'ngx-pagination';

import { PokemonsRoutingModule } from './pokemons-routing.module';
import { PokemonsListComponent } from './pokemons-list/pokemons-list.component';
import { PokemonsDetailsComponent } from './pokemons-details/pokemons-details.component';
import { MenusSharedModule } from 'src/app/menus/menus-shared.module';

@NgModule({
  declarations: [PokemonsListComponent, PokemonsDetailsComponent],
  imports: [
    CommonModule,
    PokemonsRoutingModule,
    NgxPaginationModule,
    MenusSharedModule,
  ],
  exports: [PokemonsListComponent, PokemonsDetailsComponent],
})
export class PokemonsModule {}
