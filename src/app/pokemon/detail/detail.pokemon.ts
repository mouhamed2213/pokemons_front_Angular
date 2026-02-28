import { Component, OnInit, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pokemons } from '../pokemon';
import { CustomtypeColorPipe } from '../../shared/pipes/type.color.pipe';
import { PokemonService } from '../service';
@Component({
  selector: 'app-detail.pokemon',
  imports: [CustomtypeColorPipe],
  // providers: [pokemonService],
  templateUrl: './detail.pokemon.html',
  styleUrl: './detail.pokemon.css',
})
export class DetailPokemon implements OnInit {
  private route = inject(ActivatedRoute);
  private pokemonService = inject(PokemonService);

  public pokemon!: Pokemons | undefined;

  ngOnInit(): void {
    this.getOnePokemon(1);
  }
  getOnePokemon(pokemonId: number) {
    return this.pokemonService.getOnePokemon(pokemonId).subscribe((pokemon) => {
      this.pokemon = pokemon;
    });
  }
}
