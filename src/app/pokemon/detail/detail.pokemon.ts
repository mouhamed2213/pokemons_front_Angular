import { Component, OnInit, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { POKEMONS } from '../../mock/mock_pokemon';
import { Pokemons } from '../../pokemon';
import { CustomtypeColorPipe } from '../../shared/pipes/type.color.pipe';
@Component({
  selector: 'app-detail.pokemon',
  imports: [CustomtypeColorPipe],
  templateUrl: './detail.pokemon.html',
  styleUrl: './detail.pokemon.css',
})
export class DetailPokemon implements OnInit {
  private route = inject(ActivatedRoute);

  private pokemonList!: Pokemons[];
  public pokemon!: Pokemons | undefined;

  ngOnInit(): void {
    this.pokemonList = POKEMONS;
    const pokemonId: string | null = this.route.snapshot.paramMap.get('id');
    const id = Number(pokemonId);
    this.pokemon = this.pokemonList.find((pokemon) => pokemon.id === id);
    console.table(this.pokemon);
  }
}
