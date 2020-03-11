import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Pokemon } from "../pokemon";


@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.scss"]
})
export class CardComponent implements OnInit {
  @Input() pokemon: Pokemon;
  @Output() detailClickHandler: EventEmitter<number> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  detailClicked() {
    this.detailClickHandler.emit(this.pokemon.id);
  }
}
