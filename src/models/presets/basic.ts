import { Preset } from '../preset';

export const basic: Preset = {
  readonly: true,
  name: "Basic",
  separateCounters: true,
  playerCount: 2,
  players: [
    {
      counters: [{
        icon: "favorite",
        name: "Life",
        start: 40,
      }],
    },
    {
      counters: [{
        icon: "favorite",
        name: "Life",
        start: 40,
      }]
    },
    {
      counters: [{
        icon: "favorite",
        name: "Life",
        start: 40,
      }],
    },
    {
      counters: [{
        icon: "favorite",
        name: "Life",
        start: 40,
      }],
    },
  ],
};
