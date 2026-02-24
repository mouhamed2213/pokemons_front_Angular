import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { POKEMONS } from './mock_pokemon';
import { Pokemons } from './pokemon';
import { BorderCardDirective } from './border-card';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BorderCardDirective],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit {
  constructor() {}
  protected readonly title = signal(`Pokemon List`);
  public pokemons: Pokemons[] = POKEMONS;
  public pokemonName!: Pokemons | undefined;
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
