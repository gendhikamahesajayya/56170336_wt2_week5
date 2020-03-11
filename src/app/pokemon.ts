export interface Pokemon {
  id: number;
  name: string;
  firstType: string;
  secondType: string;
  total: number;
  hp: number;
  attack: number;
  defense: number;
  specialAttack: number;
  specialDefense: number;
  speed: number;
  generation: number;
  legendary: boolean;
}
