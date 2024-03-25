import { Box, Button, Typography } from "@mui/material";
import { useCounterContext, usePlayerContext } from "../context/app-context";

type ZoneForegroundProps = {
  index: number;
  onOptions: () => void;
}

export function ZoneForeground({ index, onOptions }: ZoneForegroundProps) {
  const { player } = usePlayerContext(index);
  const { counter } = useCounterContext(index, player.selected);

  return (
    <Box
      sx={{
        position: "absolute",
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1
      }}
    >
      <Box sx={{
        justifyContent: "center",
        alignItems: "center"}}>
        <Typography sx={{ fontSize: "3vh" }}>{player.name}</Typography>
        <Button onClick={onOptions}>
          <Typography sx={{ fontSize: "15vh" }}>{counter.value}</Typography>
        </Button>
        <Box />
      </Box>
    </Box>
  );
}
