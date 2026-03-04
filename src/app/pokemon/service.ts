import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, tap, of, map } from 'rxjs';
import { Pokemons, Updated } from './pokemon';
import { ApiResponse } from './pokemon';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private url = 'http://localhost:3100/api/pokemons';
  private http = inject(HttpClient);

  getPokemonList(): Observable<Pokemons[]> {
    return this.http.get<ApiResponse<Pokemons[]>>(`${this.url}`).pipe(
      tap((response) => {
        console.log(`Api response`, response);
      }),

      map((pokemon) => pokemon.data),
    );
  }

  getOnePokemon(id: number): Observable<Pokemons> {
    return this.http.get<ApiResponse<Pokemons>>(`${this.url}/${id}`).pipe(
      tap((response) => {
        console.log(response);
      }),
      map((pokemon) => pokemon.data),
    );
  }

  update(id: number, pokemon: Pokemons): Observable<Updated<null>> {
    return this.http.put<Updated<null>>(`${this.url}/${id}`, pokemon).pipe(
      tap((pokemon) => {
        console.log('Updated Pokemon : ');
      }),
    );
  }

  // implemnt
  // create methode
  // updqte methode
  // delete methode
}
