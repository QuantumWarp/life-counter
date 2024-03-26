import { Settings } from "../models/settings";
import { cloneDeep } from "lodash";

export const dupeCounters = (settings: Settings) => {
  if (settings.separateCounters) return settings;

  const counters = settings.players[0].counters;

  settings.players = settings.players
    .map((player) => ({
      ...player,
      counters: cloneDeep(counters),
    }));
  
  return settings;
};

export const resetCounters = (settings: Settings) => {
  settings.players = settings.players
    .map((player) => ({
      ...player,
      counters: [
        ...player.counters.map((x) => ({ ...x, value: x.start })),
      ],
    }));
  return settings;
};
