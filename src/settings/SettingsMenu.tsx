import { Box, Button, ButtonGroup, Checkbox, FormControl, FormControlLabel, Grid, InputLabel, MenuItem, Select, Typography } from "@mui/material";
import PlayerSettings from "./PlayerSettings";
import { useAppContext } from "../context/app-context";
import { useState } from "react";

type SettingsMenuProps = {
  onClose: () => void
}

function SettingsMenu({ onClose }: SettingsMenuProps) {
  const { settings, setSettings } = useAppContext();

  const [playerCount, setPlayerCount] = useState(settings.playerCount);
  const [mirror, setMirror] = useState(settings.mirror);

  const apply = () => {
    setSettings({
      ...settings,
      playerCount,
      mirror,
    });
    onClose();
  }

  return (
    <Box display="flex" alignItems="center" flexDirection="column">
      <Box display="flex" justifyContent="space-between">
        <Typography variant="h4">Settings</Typography>
      </Box>

      <Grid container maxWidth="400px">
        <Grid xs={12}>
          <FormControl variant="outlined" fullWidth>
            <InputLabel>Players</InputLabel>
            <Select
              label="Players"
              value={playerCount}
              onChange={(e) => setPlayerCount(e.target.value as number)}
            >
              <MenuItem value={1}>One</MenuItem>
              <MenuItem value={2}>Two</MenuItem>
              <MenuItem value={3}>Three</MenuItem>
              <MenuItem value={4}>Four</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid xs={12} onClick={() => setMirror(!mirror)}>
          <FormControlLabel control={<Checkbox defaultChecked  />} label="Mirror" />
        </Grid>

        {/* <Grid xs={12}>
          <FormControl variant="filled" fullWidth>
            <InputLabel id="demo-simple-select-label">Preset</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              label="Age"
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Grid> */}
        
        <Grid xs={12}>
          <FormControlLabel control={<Checkbox defaultChecked />} label="Separate Settings" />
        </Grid>

        <Grid xs={12}>
          <ButtonGroup variant="contained" aria-label="Basic button group">
            <Button>One</Button>
            <Button>Two</Button>
            <Button>Three</Button>
            <Button>Four</Button>
          </ButtonGroup>
        </Grid>

        <Grid xs={12}>
          <PlayerSettings />
        </Grid>
      </Grid>

      <Box>
        <Button onClick={onClose}>
          Cancel
        </Button>

        <Button>
          Reset
        </Button>
        
        <Button onClick={apply}>
          Apply
        </Button>
      </Box>
    </Box>
  )
}

export default SettingsMenu;
