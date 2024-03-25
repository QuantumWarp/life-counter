import { Counter, PresetCounter } from "./counter";

export interface PresetPlayer {
  name: string;
  counters: PresetCounter[];
}

export interface Player extends PresetPlayer {
  selected: number;
  color: string;
  counters: Counter[];
}
