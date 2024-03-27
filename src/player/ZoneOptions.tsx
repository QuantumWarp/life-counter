import { Box, Button, Grid, Icon, TextField, ToggleButton, ToggleButtonGroup, Typography } from "@mui/material";
import { usePlayer } from "../context/hooks/use-player";
import { useCounter } from "../context/hooks/use-counter";
import { useSettings } from "../context/hooks/use-settings";

type ZoneOptionsProps = {
  index: number;
  open: boolean;
  onClose: () => void;
};

export function ZoneOptions({ index, open, onClose }: ZoneOptionsProps) {
  const { settings } = useSettings();
  const { player, setPlayer } = usePlayer(index);
  const { counter, setValue } = useCounter(index);
  const top = (index === 0 || index === 3) || settings.mirror ? "100%" : "-100%";

  return (
    <Box
      sx={{
        position: "absolute",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "lightgrey",
        zIndex: 2,
        transition: ".2s",
        top: open ? 0 : top
      }}
    >
      <Box maxWidth="400px">
        <Box display="flex" justifyContent="center">
          <Typography variant="h5">Player {index + 1} Options</Typography>
        </Box>
        
        <Grid container mt={0} mb={4} spacing={2}>
          <Grid item xs={4}>
            <Button size="large" fullWidth color="error" variant="outlined" onClick={onClose}>
              Cancel
            </Button>
          </Grid>

          <Grid item xs={4}>
            <Button size="large" fullWidth variant="outlined" onClick={() => setValue(counter.start)}>
              Reset
            </Button>
          </Grid>
          
          <Grid item xs={4}>
            <Button size="large"fullWidth variant="outlined" type="submit">
              Apply
            </Button>
          </Grid>
        </Grid>

        <Typography sx={{ fontSize: "3vh" }}>{player.name}</Typography>
        
        <TextField fullWidth label="Value" value={counter.value || 0} onChange={(e) => setValue(Number(e.target.value))} />

        <ToggleButtonGroup
          sx={{ display: "flex", alignItems: "center", mt: 3 }}
          orientation="vertical"
          value={Number(player.selected || 0)}
          exclusive
          onChange={(_, value) => setPlayer({ ...player, selected: value })}
        >
          {player.counters.map((x, index) => (
            <ToggleButton key={x.name} value={index}>
              <Icon sx={{ mr: 1 }}>{x.icon}</Icon>{x.name} {x.value}
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
      </Box>
    </Box>
  );
}