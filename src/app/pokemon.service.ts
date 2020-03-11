import { Injectable } from "@angular/core";
import { POKEMON } from "./pokemonData";
import { Observable, of } from "rxjs";
import { Pokemon } from "./pokemon";

@Injectable({
  providedIn: "root"
})
export class PokemonService {
  private pokemon: Array<Pokemon> = POKEMON;
  constructor() {}

  getPokemons(): Observable<Pokemon[]> {
    return of(this.pokemon);
  }

  getPokemon(id: number): Pokemon {
    return this.pokemon.find(pokemon => (pokemon.id === id));
  }
}
