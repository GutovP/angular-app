import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
    this.getAll();
  }

  getAll() {
    this.pokemonService.getAllPokemons(25, this.page + 5).subscribe((data) => {
      this.pokemons = data;
      this.totalPages = data.count;
    });
  }
}
