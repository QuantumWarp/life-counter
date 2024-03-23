import { Box, Typography } from "@mui/material";
import { usePlayerContext } from "../context/app-context";

type ZoneProps = {
  index: number;
}

function Zone({ index }: ZoneProps) {
  const { player } = usePlayerContext(index);
  const counter = player.counters[player.selected || 0]

  return (
    <Box sx={{ backgroundColor: player.color, height: "100%", display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>
      <Typography sx={{ fontSize: "3vh" }}>{player.name}</Typography>
      <Typography sx={{ fontSize: "15vh" }}>{counter.value}</Typography>
    </Box>
  );
}

export default Zone;
