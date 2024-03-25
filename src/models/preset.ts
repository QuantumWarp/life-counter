import { PresetPlayer } from "./player";

export interface Preset {
  readonly: boolean;
  name: string;
  playerCount: number;
  players: PresetPlayer[];
}
