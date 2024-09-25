import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Pokemon } from './models/pokemon';
import { PokemonListI } from './models/pokemon.interfaces';

@Injectable({
  providedIn: 'root'
})
export class PokeService {
  public readonly API_ENDPOINT: string = 'https://pokeapi.co/api/v2/'

  constructor(private http: HttpClient) { }

  getPage(page:number) : Observable<PokemonListI>{
    return this.http.get<PokemonListI>(this.API_ENDPOINT + 'pokemon?offset=' + page * 24 + '&limit=24');
  }

  getPokemon(name:String) : Observable<Pokemon>{
    return this.http.get<Pokemon>(this.API_ENDPOINT+ 'pokemon/' + name);
  }
}
