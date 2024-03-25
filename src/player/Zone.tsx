import { Box } from "@mui/material";
import { useCounterContext, usePlayerContext } from "../context/app-context";
import { ZoneForeground } from "./ZoneForeground";
import { CounterButton } from "./CounterButton";
import { useState } from "react";
import { ZoneOptions } from "./ZoneOptions";

type ZoneProps = {
  index: number;
}

function Zone({ index }: ZoneProps) {
  const { player } = usePlayerContext(index);
  const { updateValue } = useCounterContext(index, player.selected);
  const [showOptions, setShowOptions] = useState(false);

  return (
    <Box
      sx={{
        position: "relative",
        backgroundColor: player.color,
        height: "100%",
        display: "flex",
        justifyContent: "stretch",
        alignItems: "stretch"
      }}
    >
      <ZoneForeground index={index} onOptions={() => setShowOptions(true)} />
      {showOptions && <ZoneOptions index={index} onClose={() => setShowOptions(false)} />}

      <Box display="flex" flexDirection="column" flex={1}>
        <CounterButton amount={-5} update={updateValue} />
        <CounterButton amount={-1} update={updateValue} />
        <CounterButton amount={-20} update={updateValue} />
      </Box>

      <Box display="flex" flexDirection="column" flex={1}>
        <CounterButton amount={5} update={updateValue} />
        <CounterButton amount={1} update={updateValue} />
        <CounterButton amount={20} update={updateValue} />
      </Box>
    </Box>
  );
}

export default Zone;
