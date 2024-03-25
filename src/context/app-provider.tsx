import { ReactNode, useState } from "react";
import { AppContext, AppContextType } from "./app-context";
import { initialAppData } from "./app-default";
import { AppData } from "./app-data";

const localStorageKey = "data";
let initialData = initialAppData();

try {
  const localDataStr = localStorage.getItem(localStorageKey);
  if (localDataStr) {
    initialData = JSON.parse(localDataStr);
  }
} catch {
  // First app load
}

export function AppProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<AppData>(initialData);

  const value: AppContextType = {
    data,
    setData: (x) => {
      const storageString = JSON.stringify(x);
      localStorage.setItem(localStorageKey, storageString);
      setData(x);
    },
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
}
