import { Box } from "@mui/material";
import { ZoneForeground } from "./ZoneForeground";
import { CounterButton } from "./CounterButton";
import { useState } from "react";
import { ZoneOptions } from "./ZoneOptions";
import { usePlayer } from "../context/hooks/use-player";
import { useCounter } from "../context/hooks/use-counter";
import { useStateTimeout } from "../helpers/use-state-timeout";

type ZoneProps = {
  index: number;
};

export function Zone({ index }: ZoneProps) {
  const { player } = usePlayer(index);
  const { change } = useCounter(index);

  const [showOptions, setShowOptions] = useState(false);
  const [interaction, setInteraction] = useStateTimeout(false, 3000);

  const counterButtonClick = (delta: number) => {
    setInteraction(true);
    change(delta);
  };

  return (
    <Box
      sx={{
        position: "relative",
        backgroundColor: player.color,
        height: "100%",
        display: "flex",
        justifyContent: "stretch",
        alignItems: "stretch",
        boxShadow: "inset 0 0 50px 20px rgba(0, 0, 0, 0.1)"
      }}
    >
      <ZoneForeground index={index} show={interaction} onOptions={() => setShowOptions(true)} />
      <ZoneOptions index={index} open={showOptions} onClose={() => setShowOptions(false)} />

      <Box display="flex" flexDirection="column" flex={1}>
        <CounterButton amount={-5} show={interaction} update={counterButtonClick} />
        <CounterButton primary amount={-1} show={interaction} update={counterButtonClick} />
        <CounterButton amount={-20} show={interaction} update={counterButtonClick} />
      </Box>

      <Box display="flex" flexDirection="column" flex={1}>
        <CounterButton amount={5} show={interaction} update={counterButtonClick} />
        <CounterButton primary amount={1} show={interaction} update={counterButtonClick} />
        <CounterButton amount={20} show={interaction} update={counterButtonClick} />
      </Box>
    </Box>
  );
}
