import { Preset } from '../preset';

export const basic: Preset = {
  readonly: true,
  name: "Basic",
  playerCount: 2,
  players: [
    {
      counters: [{
        icon: "heart",
        name: "Life",
        start: 40,
      }],
    },
    {
      counters: [{
        icon: "heart",
        name: "Life",
        start: 40,
      }]
    },
    {
      counters: [{
        icon: "heart",
        name: "Life",
        start: 40,
      }],
    },
    {
      counters: [{
        icon: "heart",
        name: "Life",
        start: 40,
      }],
    },
  ],
};
