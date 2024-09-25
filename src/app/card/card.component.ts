import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from '../models/pokemon';
import { PokemonList } from '../models/pokemon.list';
import { PokeService } from '../poke.service';
import { MatDialog } from '@angular/material/dialog';
import { PokemonDialogComponent } from '../pokemon.dialog/pokemon-dialog.component';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styles: [
    `

    img{
      width: 150px;
      height: 100%;
      object-fit: cover;
      background-color: lightblue;
      border-radius: 25%
    }

    .card{
      width: 100%;
      height: 100%;
      margin: 5px;
      border-style: none;
      border-radius: 10%;
      padding: 5px;
      background-color: WhiteSmoke;
      box-shadow: 10px 10px 5px lightblue;
      transition: transform .2s; 
      cursor:pointer;
    }
    .card:hover {
      transform: scale(1.1);
    }
    .card-name{

    }
    ul{
      display: flex;
      flex-direction: row;
      list-style: none;
      justify-content: center; 
      width: auto;
      white-space: nowrap;
      padding: 0;
      text-align: center;
    }
    li{
      margin-left: 10px;
      margin-right: 10px;
      padding: 3px;
      background-color: lightblue;
      border-radius: 15%
    }
    hr.rounded {
      border-top: 8px solid #bbb;
      border-radius: 5px;            
    }
    `,
  ],
})
export class CardComponent implements OnInit {
  showCard() {
    const dialogRef = this.dialog.open(PokemonDialogComponent, {
    data: this.pokemonData,
  });}
  @Input() pokemon: PokemonList = new PokemonList();

  pokemonData: Pokemon = new Pokemon();

  constructor(private pokeService: PokeService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.getPoke();
  }

  getPoke() {
    this.pokeService
      .getPokemon(this.pokemon.name)
      .subscribe((results: Pokemon) => {
        this.pokemonData = results as Pokemon;
      });
  }
}
