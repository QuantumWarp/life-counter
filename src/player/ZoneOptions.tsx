import { Box, Button, TextField, ToggleButton, ToggleButtonGroup, Typography } from "@mui/material";
import { useCounterContext, usePlayerContext } from "../context/app-context";

type ZoneOptionsProps = {
  index: number;
  onClose: () => void;
}

export function ZoneOptions({ index, onClose }: ZoneOptionsProps) {
  const { player, setPlayer } = usePlayerContext(index);
  const { counter, setValue } = useCounterContext(index, player.selected);

  return (
    <Box
      sx={{
        position: "absolute",
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "lightgrey",
        zIndex: 2
      }}
    >
      <Typography sx={{ fontSize: "3vh" }}>{player.name}</Typography>
      
      <TextField fullWidth label="Value" value={counter.value || 0} onChange={(e) => setValue(Number(e.target.value))} />
      <Button onClick={() => setValue(counter.start)}>Reset</Button>
      <ToggleButtonGroup
        orientation="vertical"
        value={Number(player.selected || 0)}
        exclusive
        onChange={(_, value) => setPlayer({ ...player, selected: value })}
      >
        {player.counters.map((x, index) => (
          <ToggleButton key={x.name} value={index}>
            {x.name}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>

      <Button onClick={onClose}>Close</Button>
    </Box>
  );
}