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
    hp: new FormControl(0, [Validators.required]),
    cp: new FormControl(0, [Validators.required]),
    picture: new FormControl('', Validators.required),
    types: new FormGroup({
      Feu: new FormControl(),
      Eau: new FormControl(),
      Fee: new FormControl(),
      Insect: new FormControl(),
      Poison: new FormControl(),
    }),
  });

  private pokemonId!: number;
  ngOnInit(): void {
    this.pokemonId = Number(this.route.snapshot.paramMap.get('id'));
    // find pokemon
    this.pokmemonService
      .getOnePokemon(this.pokemonId)
      .subscribe((pokemonData) => {
        this.pokemon = pokemonData;
        this.prefield(this.pokemon);
      });
  }
  onSubmit(e: Event) {
    e.preventDefault();
    const pokemon = this.updateForm.value as Pokemons;
    const { types } = pokemon;
    const typeArray: string[] = [];

    Object.entries(types).forEach((values) => {
      if (values[1] !== null || values[1] === false) {
        typeArray.push(values[0]);
      }
    });

    const updatePokemon = { ...pokemon, types: typeArray };
    console.log(updatePokemon);

    this.pokmemonService
      .update(this.pokemonId, updatePokemon)
      .subscribe((data) => {
        console.log('Updateed', data);
      });
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
        // Insect: pokemonType.includes('Insecte') ? 'Insect' : null,
        Insect: pokemonType.find((value) => value === 'Insecte'),
        Poison: pokemonType.includes('Poison') ? 'Poison' : null,
        Feu: pokemonType.includes('Feu') ? 'Feu' : null,
        Eau: pokemonType.includes('Eau') ? 'Eau' : null,
        Fee: pokemonType.includes('Fee') ? 'Fee' : null,
      },
    });
  }
}
