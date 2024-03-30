import { usePlayer } from "./use-player";
import { useSettings } from "./use-settings";

export const useCounter = (playerIndex: number) => {
  const { settings } = useSettings();
  const { player, setPlayer } = usePlayer(playerIndex);

  const counter = settings.counters[player.counterSelected];
  const value = player.counterValues[player.counterSelected];

  const set = (newValue: number) => {
    const counterValues = [...player.counterValues];
    counterValues[player.counterSelected] = newValue;
    setPlayer({ ...player, counterValues });
  };

  const change = (delta: number) => {
    set(value + delta);
  };

  const reset = () => {
    set(counter.start);
  };

  return  { counter, value, set, change, reset };
};
