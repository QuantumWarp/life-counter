import { Counter } from "./counter";

export type Players = Player[];

export interface Player {
  name: string;
  color: string;
  selected?: number;
  counters: Counter[];
}
