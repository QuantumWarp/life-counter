import { basics } from "../models/presets/basics";
import { complex } from "../models/presets/complex";
import { lifeOnly } from "../models/presets/life-only";
import { AppData } from "./app-data";

const initialPreset = lifeOnly;
const initialCounters = initialPreset.counters.map((x) => x.start)

export const initialAppData: () => AppData = () => ({
  presets: [
    lifeOnly,
    basics,
    complex,
  ],
  settings: {
    mirror: true,
    lastPreset: initialPreset.name,
    playerCount: initialPreset.playerCount,
    counters: initialPreset.counters,
    players: [{
      name: "Player 1",
      color: "lightblue",
      counterSelected: 0,
      counterValues: [...initialCounters],
    }, {
      name: "Player 2",
      color: "pink",
      counterSelected: 0,
      counterValues: [...initialCounters],
    }, {
      name: "Player 3",
      color: "lightgreen",
      counterSelected: 0,
      counterValues: [...initialCounters],
    }, {
      name: "Player 4",
      color: "lightgrey",
      counterSelected: 0,
      counterValues: [...initialCounters],
    }],
  },
});
