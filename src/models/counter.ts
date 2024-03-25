export interface PresetCounter {
  icon: string;
  name: string;
  start: number;
}

export interface Counter extends PresetCounter {
  value: number;
}
