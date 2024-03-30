import { Preset } from '../preset';

export const lifeOnly: Preset = {
  readonly: true,
  name: "Life Only",
  playerCount: 2,
  counters: [{
    icon: "favorite",
    name: "Life",
    start: 40,
  }],
};
