import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Pokemons, Results } from 'src/app/pages/pokemons/pokemons';


@Injectable({
  providedIn: 'root'
})
export class PokemonsService {

  private pokemonsUrl = 'https://pokeapi.co/api/v2';

  constructor(private http: HttpClient) { }


  getAllPokemons(limit: number, offset: number): Observable<Pokemons> {
    return this.http.get<Pokemons>(`${this.pokemonsUrl}/pokemon?limit=${limit}&offset=${offset}`);
  }

  getPokemonsDetails(name: string): Observable<Results[]> {
    const url = `${this.pokemonsUrl}/pokemon/${name}`;
    return this.http.get<Results[]>(url);
  }
}
