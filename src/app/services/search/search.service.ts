import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import {
  debounceTime,
  distinctUntilChanged,
  map,
  switchMap,
} from 'rxjs/operators';

import { Results } from 'src/app/pages/pokemons/pokemons';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  baseUrl = 'https://pokeapi.co/api/v2';
  private results: Observable<Results[]>;
  constructor(private http: HttpClient) {}

  search(terms: string): Observable<Results[]> {
    const url = `${this.baseUrl}/pokemon/${terms}`;

    return this.http.get<Results[]>(url);
  }
}
