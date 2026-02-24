import { Routes } from '@angular/router';
import { PokemonComponent } from './pokemon/list-pokemon/pokemon.component';
import { DetailPokemon } from './pokemon/detail/detail.pokemon';

export const routes: Routes = [
  { path: 'pokemons', component: PokemonComponent },
  { path: 'pokemon/:id', component: DetailPokemon },
  { path: '', redirectTo: '/pokemon', pathMatch: 'full' },
];
