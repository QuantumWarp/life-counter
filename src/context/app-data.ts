import { Preset } from "../models/preset";
import { Settings } from "../models/settings";

export interface AppData {
  settings: Settings;
  presets: Preset[];
}
