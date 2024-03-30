import { Box, Button, Checkbox, Divider, FormControlLabel, Grid, ToggleButton, ToggleButtonGroup, Typography } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { Settings } from "../models/settings";
import { PlayerSettings } from "./PlayerSettings";
import { useState } from "react";
import { useSettings } from "../context/hooks/use-settings";
import { PresetSettings } from "./PresetSettings";
import { dupeCounters, resetCounters } from "../helpers/settings.helper";
import { CountersSettings } from "./CountersSettings";

type SettingsMenuProps = {
  onClose: () => void
};

export function SettingsMenu({ onClose }: SettingsMenuProps) {
  const { settings, setSettings } = useSettings();
  
  const form = useForm<Settings>({ defaultValues: settings });
  const { control, reset, handleSubmit, getValues } = form;

  const [playerIndex, setPlayerIndex] = useState(0);

  const onSubmit = (newSettings: Settings) => {
    newSettings = dupeCounters(newSettings);
    setSettings(newSettings);
    onClose()
  };

  const cancel = () => {
    reset(settings);
    onClose();
  }

  const setDefaults = () => {
    let newSettings = getValues();
    newSettings = dupeCounters(newSettings);
    newSettings = resetCounters(newSettings);
    setSettings(newSettings);
    onClose();
  };

  return (
    <Box display="flex" alignItems="center" flexDirection="column"  p={2} maxHeight="100vh" overflow="auto">
      <Box  maxWidth="400px">

      <Box display="flex" justifyContent="center">
        <Typography variant="h4">Settings</Typography>
      </Box>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container mt={0} mb={4} spacing={2}>
          <Grid item xs={4}>
            <Button size="large" fullWidth color="error" variant="outlined" onClick={cancel}>
              Cancel
            </Button>
          </Grid>

          <Grid item xs={4}>
            <Button size="large" fullWidth variant="outlined" onClick={setDefaults}>
              Reset
            </Button>
          </Grid>
          
          <Grid item xs={4}>
            <Button size="large"fullWidth variant="outlined" type="submit">
              Apply
            </Button>
          </Grid>
        </Grid>

        <Grid container spacing={4}>
          <Grid item xs={12}>
            <PresetSettings form={form} />
          </Grid>

          <Grid item xs={12} display="flex" alignItems="center">
            <Controller
              name="playerCount"
              control={control}
              render={({ field: { onChange, value } }) => (
                <ToggleButtonGroup
                  fullWidth
                  value={Number(value)}
                  exclusive
                  onChange={(_, value) => onChange(value)}
                >
                  <ToggleButton sx={{ width: "22%", ml: "8%" }} value={1}>One</ToggleButton>
                  <ToggleButton sx={{ width: "22%" }} value={2}>Two</ToggleButton>
                  <ToggleButton sx={{ width: "22%" }} value={3}>Three</ToggleButton>
                  <ToggleButton sx={{ width: "22%" }} value={4}>Four</ToggleButton>
                </ToggleButtonGroup>
              )}
            />
          </Grid>

          <Grid item xs={12} display="flex" justifyContent="center">
            <Controller
              name="mirror"
              control={control}
              render={({ field: { onChange, value } }) => (
                <FormControlLabel
                  label="Mirror"
                  control={<Checkbox checked={value} onChange={onChange} />}
                />
              )}
            />
          </Grid>

          <Divider sx={{ width:'100%', mt: 3 }} />
          
          <PlayerSettings key={playerIndex} index={playerIndex} form={form} next={() => setPlayerIndex(playerIndex + 1)} previous={() => setPlayerIndex(playerIndex - 1)} />
        
          <CountersSettings form={form} />
        </Grid>
      </form>
      </Box>
    </Box>
  )
}
