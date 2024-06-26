import { Counter } from "./counter";
import { Player } from "./player";

export interface Settings {
  mirror: boolean;
  lastPreset: string;
  playerCount: number;
  players: Player[];
  counters: Counter[];
}
