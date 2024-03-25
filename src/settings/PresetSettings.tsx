import { FormControl, InputLabel, Select, MenuItem, Box, Button, TextField } from "@mui/material";
import { useState } from "react";
import { usePresets } from "../context/hooks/use-presets";

export function PresetSettings() {
  const { presets } = usePresets();
  const [presetToLoad, setPresetToLoad] = useState<string>();

  return (
    <Box>
      <FormControl fullWidth>
        <InputLabel>Presets</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={presetToLoad}
          label="Age"
          onChange={(e) => setPresetToLoad(e.target.value)}
        >
          {presets.map((x) => (
            <MenuItem value={x.name}>{x.name}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <Button>
        Load
      </Button>
      <Button>
        Delete
      </Button>
      <TextField fullWidth label="Name" />
      <Button>
        Save
      </Button>
    </Box>
  );
}