import { Preset } from '../preset';

export const complex: Preset = {
  readonly: true,
  name: "Complex",
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
  }, {
    icon: "filter_1",
    name: "Damage 1",
    start: 0,
  }, {
    icon: "filter_2",
    name: "Damage 2",
    start: 0,
  }, {
    icon: "filter_3",
    name: "Damage 3",
    start: 0,
  }],
};
