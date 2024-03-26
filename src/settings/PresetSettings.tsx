import { FormControl, InputLabel, Select, MenuItem, TextField, Grid, InputAdornment, IconButton, ListItemText } from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";
import { usePresets } from "../context/hooks/use-presets";
import { UseFormReturn } from "react-hook-form";
import { Settings } from "../models/settings";
import { dupeCounters, resetCounters } from "../helpers/settings.helper";
import { merge } from "lodash";

type PresetSettingsProps = {
  form: UseFormReturn<Settings>;
};

export function PresetSettings({ form }: PresetSettingsProps) {
  const { presets, upsert, remove } = usePresets();
  const [loadedPreset, setLoadedPreset] = useState<string | null>(null);
  const [savePresetName, setSavePresetName] = useState<string>("");
  const { getValues, trigger, reset } = form;
  
  const savePreset = async () => {
    const result = await trigger();
    if (!result) return;
    let settings = getValues();
    settings = dupeCounters(settings);
    settings = resetCounters(settings);
    upsert({
      readonly: false,
      name: savePresetName,
      playerCount: settings.playerCount,
      players: settings.players
    })
  };
  
  const loadPreset = async (name: string) => {
    const preset = presets.find((x) => x.name === name);
    if (!preset) return;
    setLoadedPreset(name);
    setSavePresetName(name);
    let settings = getValues();
    settings = merge(settings, preset);
    reset(settings);
  };

  return (
    <Grid container spacing={1}>
      <Grid item xs={6}>
        <FormControl fullWidth>
          <InputLabel>Presets</InputLabel>
          <Select
            value={loadedPreset}
            label="Presets"
            onChange={(e) => loadPreset(e.target.value || "")}
            renderValue={(x) => x}
          >
            {presets.map((x) => (
              <MenuItem value={x.name}>
                <ListItemText primary={x.name} />
                <IconButton color="error" onClick={(e) => { e.stopPropagation(); remove(x.name); }}>
                  <DeleteIcon />
                </IconButton>
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>

      <Grid item xs={6}>
        <TextField
          fullWidth
          label="New Preset"
          value={savePresetName}
          onChange={(e) => setSavePresetName(e.target.value)}
          InputProps={{
            endAdornment: savePresetName && (
              <InputAdornment position="end">
                <IconButton color="info" onClick={savePreset}>
                  <SaveIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Grid>
    </Grid>
  );
}