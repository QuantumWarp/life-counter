import { ReactNode, useState } from "react";
import { Settings } from "../models/settings";
import { AppContext } from "./app-context";
import { defaultSettings } from "./app-default";

export function AppProvider({ children }: { children: ReactNode }) {
  const [settings, setSettings] = useState<Settings>(defaultSettings());

  const value = { settings, setSettings };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
}
