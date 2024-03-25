import { Preset } from '../preset';

export const basic: Preset = {
  readonly: true,
  name: "Basic",
  playerCount: 2,
  players: [
    {
      name: "Player 1",
      counters: [{
        icon: "heart",
        name: "Life",
        start: 40,
      }],
    },
    {
      name: "Player 2",
      counters: [{
        icon: "heart",
        name: "Life",
        start: 40,
      }]
    },
    {
      name: "Player 3",
      counters: [{
        icon: "heart",
        name: "Life",
        start: 40,
      }],
    },
    {
      name: "Player 4",
      counters: [{
        icon: "heart",
        name: "Life",
        start: 40,
      }],
    },
  ],
};
