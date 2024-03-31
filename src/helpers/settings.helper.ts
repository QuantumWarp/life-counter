import { Settings } from "../models/settings";

export const resetChangedCounters = (settings: Settings, prevSettings: Settings) => {
  settings.players = settings.players
    .map((player, playerIndex) => ({
      ...player,
      counterValues: settings.counters.map((x, index) => {
        const prevCounter = prevSettings.counters[index];
        if (!prevCounter || prevCounter.name !== x.name) return x.start;
        return prevSettings.players[playerIndex].counterValues[index];
      })
    }));
  return settings;
};

export const resetCounters = (settings: Settings) => {
  settings.players = settings.players
    .map((player) => ({
      ...player,
      counterValues: settings.counters.map((x) => x.start)
    }));
  return settings;
};
