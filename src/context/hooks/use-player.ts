import { Player } from "../../models/player";
import { useSettings } from "./use-settings";

export const usePlayer = (index: number) => {
  const { settings, setSettings } = useSettings();

  const player = settings.players[index];

  const setPlayer = (player: Player) => {
    const players = [...settings.players];
    players[index] = player;
    setSettings({ ...settings, players });
  };
  
  return { player, setPlayer };
};
