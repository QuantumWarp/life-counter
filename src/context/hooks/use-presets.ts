import { Preset } from "../../models/preset";
import { useAppContext } from "../app-context";

export const usePresets = () => {
  const { data, setData } = useAppContext();

  const presets = data.presets;

  const upsert = (preset: Preset) => {
    const filteredPresets = presets.filter((x) => x.name !== preset.name);
    setData({ ...data, presets: [preset].concat(filteredPresets) });
  };

  const remove = (name: string) => {
    setData({ ...data, presets: presets.filter((x) => x.name == name) });
  };

  return { presets, upsert, remove };
};
