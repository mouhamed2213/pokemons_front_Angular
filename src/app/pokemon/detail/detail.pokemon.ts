import { Component, OnInit, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pokemons } from '../../pokemon';
import { CustomtypeColorPipe } from '../../shared/pipes/type.color.pipe';
import { pokemonService } from '../service';
@Component({
  selector: 'app-detail.pokemon',
  imports: [CustomtypeColorPipe],
  templateUrl: './detail.pokemon.html',
  styleUrl: './detail.pokemon.css',
})
export class DetailPokemon implements OnInit {
  private route = inject(ActivatedRoute);
  private pokemonService = inject(pokemonService);

  public pokemon!: Pokemons | undefined;

  ngOnInit(): void {
    // get para
    const pokemonId = this.route.snapshot.paramMap.get('id');
    const id = Number(pokemonId);
    this.pokemon = this.pokemonService.getOnePokemon(id);
  }
}
