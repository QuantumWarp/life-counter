import { createContext, useContext } from "react";
import { Settings } from "../models/settings";
import { defaultSettings } from "./app-default";
import { Player } from "../models/player";
import { Counter } from "../models/counter";

type AppContextType = {
  settings: Settings;
  setSettings: (settings: Settings) => void;
}

export const AppContext = createContext<AppContextType>({
  settings: defaultSettings(),
  setSettings: () => {}
});

export const useAppContext = () => {
  return useContext(AppContext);
};

export const usePlayerContext = (playerIndex: number) => {
  const { settings, setSettings } = useAppContext();

  const player = settings.current[playerIndex];

  const setPlayer = (player: Player) => {
    const current = [...settings.current];
    current[playerIndex] = player;
    setSettings({ ...settings, current });
  }
  
  return { player, setPlayer };
};

export const useCounterContext = (playerIndex: number, counterIndex: number = 0) => {
  const { player, setPlayer } = usePlayerContext(playerIndex);

  const counter = player.counters[counterIndex];

  const setCounter = (counter: Counter) => {
    const counters = [...player.counters];
    counters[counterIndex] = counter;
    setPlayer({ ...player, counters });
  };

  const setValue = (newValue: number) => {
    setCounter({ ...counter, value: newValue });
  }

  const updateValue = (change: number) => {
    setValue((counter.value || 0) + change);
  }

  return  { counter, setCounter, setValue, updateValue };
}
