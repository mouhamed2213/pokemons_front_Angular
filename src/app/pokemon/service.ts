import { Injectable } from '@angular/core';
import { Pokemons } from '../pokemon';
import { POKEMONS } from '../mock/mock_pokemon';

@Injectable()
export class pokemonService {
  getPokemonList(): Pokemons[] {
    return POKEMONS;
  }

  getOnePokemon(pokemonId: number): Pokemons | undefined {
    return POKEMONS.find((pokemon) => pokemon.id === pokemonId);
  }
}
