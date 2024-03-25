import { Counter } from "../../models/counter";
import { usePlayer } from "./use-player";

export const useCounter = (index: number) => {
  const { player, setPlayer } = usePlayer(index);

  const selected = player.selected;
  const counter = player.counters[selected];

  const setCounter = (counter: Counter) => {
    const counters = [...player.counters];
    counters[selected] = counter;
    setPlayer({ ...player, counters });
  };

  const setValue = (newValue: number) => {
    setCounter({ ...counter, value: newValue });
  };

  const changeValue = (change: number) => {
    setValue((counter.value || 0) + change);
  };

  return  { counter, setValue, changeValue };
};
