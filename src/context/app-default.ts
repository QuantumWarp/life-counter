import { basic } from "../models/presets/basic";
import { AppData } from "./app-data";

const initialPreset = basic;

export const initialAppData: () => AppData = () => ({
  presets: [
    basic,
  ],
  settings: {
    mirror: true,
    lastPreset: initialPreset.name,
    playerCount: initialPreset.playerCount,
    players: [{
      ...initialPreset.players[0],
      selected: 0,
      color: "lightblue",
      counters: initialPreset.players[0].counters.map((x) => ({
        ...x,
        value: x.start
      })),
    }, {
      ...initialPreset.players[0],
      selected: 0,
      color: "pink",
      counters: initialPreset.players[0].counters.map((x) => ({
        ...x,
        value: x.start,
      })),
    }, {
      ...initialPreset.players[0],
      selected: 0,
      color: "lightgreen",
      counters: initialPreset.players[0].counters.map((x) => ({
        ...x,
        value: x.start,
      })),
    }, {
      ...initialPreset.players[0],
      selected: 0,
      color: "lightgrey",
      counters: initialPreset.players[0].counters.map((x) => ({
        ...x,
        value: x.start,
      })),
    }],
  },
});
