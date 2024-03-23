import { Player } from '../player'

export const basic: () => Player[] = () => [
  {
    name: "Player 1",
    color: "lightblue",
    counters: [{
      icon: "heart",
      name: "Life",
      start: 40,
      value: 40
    }]
  },
  {
    name: "Player 2",
    color: "pink",
    counters: [{
      icon: "heart",
      name: "Life",
      start: 40,
      value: 40
    }]
  },
  {
    name: "Player 3",
    color: "lightgreen",
    counters: [{
      icon: "heart",
      name: "Life",
      start: 40,
      value: 40
    }]
  },
  {
    name: "Player 4",
    color: "lightgrey",
    counters: [{
      icon: "heart",
      name: "Life",
      start: 40,
      value: 40
    }]
  }
];
