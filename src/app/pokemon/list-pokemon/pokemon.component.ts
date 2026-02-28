import { Component, inject, OnInit, signal } from '@angular/core';
import { POKEMONS } from '../../mock/mock_pokemon';
import { Pokemons } from '../../pokemon';
import { BorderCardDirective } from '../../shared/directives/border-card';
import { DatePipe } from '@angular/common';
import { CustomtypeColorPipe } from '../../shared/pipes/type.color.pipe';
import { HpColorPipe } from '../../shared/pipes/hp.color.pipe';
import { Router } from '@angular/router';
import { pokemonService } from '../service';
@Component({
  selector: 'app-pokemon.component',
  imports: [BorderCardDirective, DatePipe, CustomtypeColorPipe, HpColorPipe],
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.css',
})
export class PokemonComponent {
  protected readonly title = signal(`Pokemon List`);

  private router = inject(Router);
  private pokemonService = inject(pokemonService);
  public pokemons: Pokemons[] = this.pokemonService.getPokemonList();

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

  redirect(pokemon: Pokemons) {
    this.router.navigate(['/pokemon', pokemon.id]);
  }
}
