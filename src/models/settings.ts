import { Players } from "./player";

export interface Settings {
  mirror: boolean;
  playerCount: number;
  current: Players;
  presets: Players[];
}