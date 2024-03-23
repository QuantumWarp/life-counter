import { basic } from "../models/presets/basic";
import { Settings } from "../models/settings";

export const defaultSettings: () => Settings = () => ({
  mirror: true,
  playerCount: 2,
  current: basic(),
  presets: [basic()]
})
