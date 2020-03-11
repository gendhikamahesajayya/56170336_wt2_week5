import { Component, OnInit } from "@angular/core";
import { Pokemon } from "../pokemon";
import { PokemonService } from "../pokemon.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent implements OnInit {
  pokemons: Array<Pokemon>;

  constructor(private pokemonService: PokemonService, private router: Router) {}

  ngOnInit(): void {
    this.pokemonService
      .getPokemons()
      .subscribe(pokemons => (this.pokemons = pokemons));
  }

  goToDetail(id: number) {
    this.router.navigate(["/pokemon", id]);
  }
}
