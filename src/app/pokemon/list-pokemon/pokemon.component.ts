import { Component, OnInit, signal } from '@angular/core';
import { POKEMONS } from '../../mock/mock_pokemon';
import { Pokemons } from '../../pokemon';
import { BorderCardDirective } from '../../border-card';
import { DatePipe } from '@angular/common';
import { CustomtypeColorPipe } from '../../pipes/type.color.pipe';
import { HpColorPipe } from '../../pipes/hp.color.pipe';
@Component({
  selector: 'app-pokemon.component',
  imports: [BorderCardDirective, DatePipe, CustomtypeColorPipe, HpColorPipe],
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.css',
})
export class PokemonComponent {
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
