import { createContext, useContext } from "react";
import { initialAppData } from "./app-default";
import { AppData } from "./app-data";

export type AppContextType = {
  data: AppData;
  setData: (data: AppData) => void;
};

export const AppContext = createContext<AppContextType>({
  data: initialAppData(),
  setData: () => {},
});

export const useAppContext = () => {
  return useContext(AppContext);
};
