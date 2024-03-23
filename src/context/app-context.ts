import { createContext, useContext } from "react";
import { Settings } from "../models/settings";
import { defaultSettings } from "./app-default";

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

export const usePlayerContext = (index: number) => {
  const { settings } = useAppContext();
  return {
    player: settings.current[index]
  };
};
