import { PresetPlayer } from "./player";

export interface Preset {
  readonly: boolean;
  name: string;
  separateCounters: boolean;
  playerCount: number;
  players: PresetPlayer[];
}
