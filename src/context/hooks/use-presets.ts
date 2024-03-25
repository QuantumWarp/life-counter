import { Preset } from "../../models/preset";
import { useAppContext } from "../app-context";

export const usePresets = () => {
  const { data, setData } = useAppContext();

  const presets = data.presets;

  const add = (preset: Preset) => {
    setData({ ...data, presets: [preset].concat(presets) });
  };

  const remove = (name: string) => {
    setData({ ...data, presets: presets.filter((x) => x.name == name) });
  };

  return { presets, add, remove };
};
