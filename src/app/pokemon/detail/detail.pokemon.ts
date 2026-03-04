import { Component, OnInit, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Pokemons } from '../pokemon';
import { CustomtypeColorPipe } from '../../shared/pipes/type.color.pipe';
import { PokemonService } from '../service';
@Component({
  selector: 'app-detail.pokemon',
  imports: [CustomtypeColorPipe, RouterLink],
  // providers: [pokemonService],
  templateUrl: './detail.pokemon.html',
  styleUrl: './detail.pokemon.css',
})
export class DetailPokemon implements OnInit {
  private route = inject(ActivatedRoute);
  private pokemonService = inject(PokemonService);

  public pokemon!: Pokemons | undefined;

  private pokemonId!: number;

  ngOnInit(): void {
    this.getOnePokemon();
  }
  getOnePokemon() {
    // use router to get the id

    this.pokemonId = Number(this.route.snapshot.paramMap.get('id'));

    return this.pokemonService
      .getOnePokemon(this.pokemonId)
      .subscribe((pokemon) => {
        this.pokemon = pokemon;
      });
  }

  onSubmit() {
    this.pokemonService.delete(this.pokemonId).subscribe((response) => {
      console.log(response);
    });
  }
}
