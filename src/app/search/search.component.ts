import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { PokeService } from '../poke.service';
import { Pokemon } from '../models/pokemon';
import { MatDialog } from '@angular/material/dialog';
import { PokemonDialogComponent } from '../pokemon.dialog/pokemon-dialog.component';
import { error } from 'node:console';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './search.component.html',
  styles: ``,
})
export class SearchComponent {
  search() {
    this.pokeService.getPokemon(this.value.toLowerCase()).subscribe((results: Pokemon) => {
        this.pokemonData = results as Pokemon;
        this.dialog.open(PokemonDialogComponent, {data: this.pokemonData,})},
      error => {
        alert("Pokemon not found");
      }
    );
  }
  value = '';
  pokemonData: Pokemon = new Pokemon();

  constructor(private pokeService: PokeService, public dialog: MatDialog) {}
}
