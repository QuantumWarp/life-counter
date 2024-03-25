import { Box, Button, Checkbox, Divider, FormControlLabel, Grid, ToggleButton, ToggleButtonGroup, Typography } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { Settings } from "../models/settings";
import { PlayerSettings } from "./PlayerSettings";
import { useState } from "react";
import { useSettings } from "../context/hooks/use-settings";
import { PresetSettings } from "./PresetSettings";

type SettingsMenuProps = {
  onClose: () => void
};

export function SettingsMenu({ onClose }: SettingsMenuProps) {
  const { settings, setSettings } = useSettings();
  
  const form = useForm<Settings>({ defaultValues: settings });
  const { control, reset, handleSubmit } = form;

  const [playerIndex, setPlayerIndex] = useState(0);
  const [separateCounters, setSeparateCounters] = useState(false);
  
  const onSubmit = (newSettings: Settings) => {
    console.log(newSettings);
    setSettings(newSettings);
    onClose()
  };

  const cancel = () => {
    reset(settings);
    onClose();
  }

  const setDefaults = () => {
    // TODO
  };

  return (
    <Box display="flex" alignItems="center" flexDirection="column"  p={2}>
      <Box  maxWidth="400px">

      <Box display="flex" justifyContent="center">
        <Typography variant="h4">Settings</Typography>
      </Box>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container mt={0} mb={4} spacing={2}>
            <Grid item xs={4}>
          <Button size="large"fullWidth color="error" variant="outlined" onClick={cancel}>
            Cancel
          </Button>
            </Grid>

            <Grid item xs={4}>
          <Button  size="large" fullWidth variant="outlined" onClick={setDefaults}>
            Reset
          </Button>
            </Grid>
          
            <Grid item xs={4}>
          <Button  size="large"fullWidth variant="outlined" type="submit">
            Apply
          </Button>
            </Grid>
        </Grid>

        <Grid container>
          <Grid item xs={12} display="flex" alignItems="center">
            <Typography mr={2}>Players</Typography>
            <Controller
              name="playerCount"
              control={control}
              render={({ field: { onChange, value } }) => (
                <ToggleButtonGroup
                  fullWidth
                  value={Number(value)}
                  exclusive
                  onChange={onChange}
                >
                  <ToggleButton sx={{ width: "20%" }} value={1}>
                    One
                  </ToggleButton>
                  <ToggleButton sx={{ width: "20%" }}  value={2}>
                    Two
                  </ToggleButton>
                  <ToggleButton sx={{ width: "20%" }}  value={3}>
                    Three
                  </ToggleButton>
                  <ToggleButton sx={{ width: "20%" }}  value={4}>
                    Four
                  </ToggleButton>
                </ToggleButtonGroup>
              )}
            />
          </Grid>

          <PresetSettings />
          <Grid item xs={12}>
            <Controller
              name="mirror"
              control={control}
              render={({ field: { onChange, value } }) => (
                <FormControlLabel  control={<Checkbox checked={value} onChange={onChange}  />} label="Mirror" />
              )}
            />
            <FormControlLabel  control={<Checkbox checked={separateCounters} onChange={() => setSeparateCounters(!separateCounters)}  />} label="Separate Counters" />
          </Grid>

          <Grid item xs={12}>
          </Grid>

            <Divider sx={{width:'100%'}} />
            <PlayerSettings key={playerIndex} index={playerIndex} separate={separateCounters} form={form} next={() => setPlayerIndex(playerIndex + 1)} previous={() => setPlayerIndex(playerIndex - 1)} />
        </Grid>
      </form>
      </Box>
    </Box>
  )
}
