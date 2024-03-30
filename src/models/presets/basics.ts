import { Preset } from '../preset';

export const basics: Preset = {
  readonly: true,
  name: "Basics",
  playerCount: 2,
  counters: [{
    icon: "favorite",
    name: "Life",
    start: 40,
  }, {
    icon: "invert_colors",
    name: "Poison",
    start: 0,
  }, {
    icon: "upload",
    name: "Experience",
    start: 0,
  }, {
    icon: "bolt",
    name: "Energy",
    start: 0,
  }]
};
