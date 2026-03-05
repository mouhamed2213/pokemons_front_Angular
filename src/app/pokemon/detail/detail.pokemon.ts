import { Component, OnInit, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Pokemons } from '../pokemon';
import { CustomtypeColorPipe } from '../../shared/pipes/type.color.pipe';
import { PokemonService } from '../service';
import { Router } from '@angular/router';
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

  public router = inject(Router);

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
    if (confirm('Confirmer la suppression ?')) {
      this.pokemonService.delete(this.pokemonId).subscribe({
        next: (value) => {
          console.log('Deleted ', value);
          alert('Pokemon deleted');
          this.router.navigate(['/pokemons']);
        },
        error(err) {
          console.error('Cannot deleted', err);
        },
        complete() {
          console.log('End');
        },
      });
    }
  }
}
