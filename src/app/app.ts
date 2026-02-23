import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { POKEMONS } from './mock_pokemon';
import { Pokemons } from './pokemon';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit {
  pokemons: Pokemons[] = POKEMONS;
  protected readonly title = signal(`Pokemon List`);

  ngOnInit(): void {
    console.table(this.pokemons);
    this.selectPokemon(this.pokemons);
  }

  selectPokemon(pokemmon: Pokemons[]) {
    console.log(`Vous avez choisi le pokemon ${pokemmon}`);
  }
}
