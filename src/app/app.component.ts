import { Component, NgModule, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { PokeService } from './poke.service';
import { PokemonList } from './models/pokemon.list';
import { PokemonListI } from './models/pokemon.interfaces';
import { CardComponent } from './card/card.component';
import { MatButton, MatFabButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    SearchComponent,
    CardComponent,
    MatButton,
    MatFabButton,
    MatIcon,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  
  prevPage() {
    if (this.page > 0) this.page--; this.getPage();
  }
  nextPage(){
    if (this.page < this.count) this.page++; this.getPage();
  }
  title = 'POKéDX';
  page = 0;
  count = 0;
  pokemons: PokemonList[] = [];

  constructor(private pokeService: PokeService) {}
  ngOnInit(): void {
    this.getPage();
    //console.log(this.pokemons);
  }

  getPage() {
    this.pokeService.getPage(this.page).subscribe((results: PokemonListI) => {
      this.count = Math.ceil(results.count / 24);
      this.pokemons = results.results as PokemonList[];
    });
  }
}
