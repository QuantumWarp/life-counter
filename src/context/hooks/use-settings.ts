import { Settings } from "../../models/settings";
import { useAppContext } from "../app-context";

export const useSettings = () => {
  const { data, setData } = useAppContext();

  const settings = data.settings;

  const setSettings = (updated: Settings) => {
    setData({ ...data, settings: updated });
  };

  return { settings, setSettings };
};
