import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { PokemonService } from "../pokemon.service";
import { Pokemon } from "../pokemon";

@Component({
  selector: "app-pokemon-detail",
  templateUrl: "./pokemon-detail.component.html",
  styleUrls: ["./pokemon-detail.component.scss"]
})
export class PokemonDetailComponent implements OnInit {
  pokemon: Pokemon;
  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService
  ) {}

  ngOnInit(): void {
    this.pokemon = null;
    this.route.paramMap.subscribe(param => {
      this.pokemon = this.pokemonService.getPokemon(+param.get("id"));
    });
  }
}
