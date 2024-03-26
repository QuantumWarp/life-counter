import { Player } from "./player";

export interface Settings {
  mirror: boolean;
  separateCounters: boolean;
  lastPreset: string;
  playerCount: number;
  players: Player[];
}
