import { basic } from "../models/presets/basic";
import { AppData } from "./app-data";

const initialPreset = basic;

export const initialAppData: () => AppData = () => ({
  presets: [
    basic,
  ],
  settings: {
    mirror: true,
    separateCounters: initialPreset.separateCounters,
    lastPreset: initialPreset.name,
    playerCount: initialPreset.playerCount,
    players: [{
      ...initialPreset.players[0],
      name: "Player 1",
      selected: 0,
      color: "lightblue",
      counters: initialPreset.players[0].counters.map((x) => ({
        ...x,
        value: x.start
      })),
    }, {
      ...initialPreset.players[0],
      name: "Player 2",
      selected: 0,
      color: "pink",
      counters: initialPreset.players[0].counters.map((x) => ({
        ...x,
        value: x.start,
      })),
    }, {
      ...initialPreset.players[0],
      name: "Player 3",
      selected: 0,
      color: "lightgreen",
      counters: initialPreset.players[0].counters.map((x) => ({
        ...x,
        value: x.start,
      })),
    }, {
      ...initialPreset.players[0],
      name: "Player 4",
      selected: 0,
      color: "lightgrey",
      counters: initialPreset.players[0].counters.map((x) => ({
        ...x,
        value: x.start,
      })),
    }],
  },
});
