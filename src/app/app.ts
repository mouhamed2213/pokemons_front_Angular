import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { mock_Pokemon } from './mock_pokemon';
import { Pokemons } from './pokemon';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit {
  pokemons: Pokemons[] = mock_Pokemon;
  protected readonly title = signal(`Pokemon List`);

  ngOnInit(): void {
    console.table(this.pokemons);
  }
}
