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
  public pokemonName!: Pokemons;
  protected readonly title = signal(`Pokemon List`);
  ngOnInit(): void {
    console.table(this.pokemons);
  }

  selecPokemon(number: string) {
    const parsedNumber = parseInt(number);
    const selected = this.pokemons[parsedNumber];
    this.pokemonName = selected;
    console.log(selected);
  }
}
