import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail.pokemon',
  imports: [],
  templateUrl: './detail.pokemon.html',
  styleUrl: './detail.pokemon.css',
})
export class DetailPokemon implements OnInit {
  private route = inject(ActivatedRoute);

  ngOnInit(): void {
    const pokemonId: string | null = this.route.snapshot.paramMap.get('id');
    console.log('Snapshot', pokemonId);
  }
}
