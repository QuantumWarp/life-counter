import { Counter, PresetCounter } from "./counter";

export interface PresetPlayer {
  counters: PresetCounter[];
}

export interface Player extends PresetPlayer {
  name: string;
  selected: number;
  color: string;
  counters: Counter[];
}
