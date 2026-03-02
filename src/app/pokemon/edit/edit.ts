import { Component, OnInit } from '@angular/core';
import {
  ReactiveFormsModule,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { PokemonService } from '../service';
import { ActivatedRoute } from '@angular/router';
import { Pokemons } from '../pokemon';
@Component({
  selector: 'app-edit',
  imports: [ReactiveFormsModule],
  templateUrl: './edit.html',
  styleUrl: './edit.css',
})
export class EditComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private pokmemonService: PokemonService,
  ) {}

  // variable to store pokemon
  private pokemon!: Pokemons;

  // update form
  updateForm = new FormGroup({
    name: new FormControl('test', [Validators.required]),
    hp: new FormControl(0),
    cp: new FormControl(0),
    picture: new FormControl('', Validators.required),
    types: new FormGroup({
      Feu: new FormControl(),
      Eau: new FormControl(),
      Fee: new FormControl(),
      Insect: new FormControl(true),
      Poison: new FormControl(),
    }),
  });
  ngOnInit(): void {
    const pokemonId = Number(this.route.snapshot.paramMap.get('id'));
    // find pokemon
    this.pokmemonService.getOnePokemon(pokemonId).subscribe((pokemonData) => {
      this.pokemon = pokemonData;
      this.prefield(this.pokemon);
    });
  }
  onSubmit(e: Event) {
    e.preventDefault();
  }

  // prefield pokemon form
  private prefield(pokemon: Pokemons) {
    console.log(pokemon.types);
    const pokemonType: string[] = pokemon.types;

    return this.updateForm.patchValue({
      name: pokemon.name,
      hp: pokemon.hp,
      cp: pokemon.cp,
      picture: pokemon.picture,
      types: {
        Insect: pokemonType.includes('Insecte'),
        Poison: pokemonType.includes('Poison'),
        Feu: pokemonType.includes('Feu'),

        // other type
      },
    });
  }
}
