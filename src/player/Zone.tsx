import { Box } from "@mui/material";
import { ZoneForeground } from "./ZoneForeground";
import { CounterButton } from "./CounterButton";
import { useState } from "react";
import { ZoneOptions } from "./ZoneOptions";
import { usePlayer } from "../context/hooks/use-player";
import { useCounter } from "../context/hooks/use-counter";

type ZoneProps = {
  index: number;
};

export function Zone({ index }: ZoneProps) {
  const { player } = usePlayer(index);
  const { changeValue } = useCounter(index);
  const [showOptions, setShowOptions] = useState(false);

  return (
    <Box
      sx={{
        position: "relative",
        backgroundColor: player.color,
        height: "100%",
        display: "flex",
        justifyContent: "stretch",
        alignItems: "stretch",
      }}
    >
      <ZoneForeground index={index} onOptions={() => setShowOptions(true)} />
      <ZoneOptions open={showOptions} index={index} onClose={() => setShowOptions(false)} />

      <Box display="flex" flexDirection="column" flex={1}>
        <CounterButton amount={-5} update={changeValue} />
        <CounterButton amount={-1} update={changeValue} />
        <CounterButton amount={-20} update={changeValue} />
      </Box>

      <Box display="flex" flexDirection="column" flex={1}>
        <CounterButton amount={5} update={changeValue} />
        <CounterButton amount={1} update={changeValue} />
        <CounterButton amount={20} update={changeValue} />
      </Box>
    </Box>
  );
}
