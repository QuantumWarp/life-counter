import { Counter } from "./counter";

export interface Preset {
  readonly: boolean;
  name: string;
  playerCount: number;
  counters: Counter[];
}
