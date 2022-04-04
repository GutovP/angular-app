import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { PokemonsService } from 'src/app/services/pokemons/pokemons.service';

@Component({
  selector: 'app-pokemons-details',
  templateUrl: './pokemons-details.component.html',
  styleUrls: ['./pokemons-details.component.css'],
})
export class PokemonsDetailsComponent implements OnInit {
  pokemons: any[] = [];

  constructor(
    private pokemonsService: PokemonsService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => {
      return false;
    };
  }

  ngOnInit(): void {
    this.getDetails();
  }

  getDetails(): void {
    const name = this.route.snapshot.paramMap.get('name');
    this.pokemonsService
      .getPokemonsDetails(name)
      .subscribe((pokemons) => this.pokemons.push(pokemons));
  }
}
