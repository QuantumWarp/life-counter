import { Box, Button, Divider, Grid, Icon, TextField, ToggleButton, ToggleButtonGroup, Typography } from "@mui/material";
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
  const { value, set, reset } = useCounter(index);
  const top = (index === 0 || index === 3) || settings.mirror ? "100%" : "-100%";

  return (
    <Box
      sx={{
        position: "absolute",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "lightgrey",
        transition: ".2s",
        top: open ? 0 : top,
        overflow: "auto",
        p: 2,
        zIndex: 8
      }}
    >
      <Box maxWidth="400px">
        <Box display="flex" justifyContent="center">
          <Typography variant="h5">{player.name} Options</Typography>
        </Box>
        
        <Grid container mt={0} mb={3} spacing={2}>
          <Grid item xs={4}>
            <Button size="large" fullWidth color="error" variant="outlined" onClick={onClose}>
              Cancel
            </Button>
          </Grid>

          <Grid item xs={4}>
            <Button size="large" fullWidth variant="outlined" onClick={() => reset()}>
              Reset
            </Button>
          </Grid>
          
          <Grid item xs={4}>
            <Button size="large"fullWidth variant="outlined" onClick={() => reset()}>
              Apply
            </Button>
          </Grid>
        </Grid>
        
        <TextField fullWidth label="Value" type="number" value={value} onChange={(e) => set(Number(e.target.value))} />

        <Box>
          <ToggleButtonGroup
            sx={{ display: "flex", alignItems: "center", mt: 3 }}
            orientation="vertical"
            value={Number(player.counterSelected || 0)}
            exclusive
            onChange={(_, value) => setPlayer({ ...player, counterSelected: value })}
          >
            {settings.counters.map((x, index) => (
              <ToggleButton key={x.name} value={index} sx={{ width: "min(100%, 240px)", p: 0, height: "40px" }}>
                <Box display="flex" alignItems="center" width="100%" height="100%">
                  <Box minWidth="40px" display="flex" alignItems="center" justifyContent="center"><Icon>{x.icon}</Icon></Box>
                  <Divider orientation="vertical" sx={{ height: "100%" }} />
                  <Box flex={1} sx={{ overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" }}>{x.name}</Box>
                  <Divider orientation="vertical" sx={{ height: "100%" }} />
                  <Box minWidth="40px">{player.counterValues[index]}</Box>
                </Box>
              </ToggleButton>
            ))}
          </ToggleButtonGroup>
        </Box>
      </Box>
    </Box>
  );
}