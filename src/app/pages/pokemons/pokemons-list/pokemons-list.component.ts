import { Component, OnInit } from '@angular/core';

import { PokemonsService } from 'src/app/services/pokemons/pokemons.service';

@Component({
  selector: 'app-pokemons-list',
  templateUrl: './pokemons-list.component.html',
  styleUrls: ['./pokemons-list.component.css'],
})
export class PokemonsListComponent implements OnInit {
  pokemons: any;
  page = 1;
  totalPages: number;

  constructor(private pokemonService: PokemonsService) {}

  ngOnInit(): void {
    this.getPokemons();
  }

  getPokemons() {
    this.pokemonService
      .getAllPokemons(20, (this.page - 1) * 20)
      .subscribe((data) => {
        this.pokemons = data;
        console.log(data);
        this.totalPages = data.count;
      });
  }

  handlePageChange(event: any) {
    this.page = event;
    this.getPokemons();
  }
}
