import EastIcon from "@mui/icons-material/East";
import WestIcon from "@mui/icons-material/West";
import { Box, Grid, IconButton, InputAdornment, TextField, Typography } from "@mui/material";
import { Controller, UseFormReturn } from "react-hook-form";
import { Settings } from "../models/settings";

type PlayerSettingsType = {
  form: UseFormReturn<Settings>;
  index: number;
  next: () => void;
  previous: () => void;
};

export function PlayerSettings({ index, form, next, previous }: PlayerSettingsType) {
  const { control } = form;

  return (
    <Box>
      <Box display="flex" my={1}>
        <IconButton sx={{ flex: 1, visibility: index === 0 ? "hidden" : "visible" }} onClick={() => previous()} >
          <WestIcon />
        </IconButton>
        <Typography display="flex" justifyContent="center" variant="h5" my={2}>
          Player {index + 1}
        </Typography>
        <IconButton  sx={{ flex: 1, visibility: index === 3 ? "hidden" : "visible" }} onClick={() => next()} >
          <EastIcon />
        </IconButton>
      </Box>
      
      <Grid container spacing={1}>
        <Grid item xs={6}>
          <Controller
            name={`players.${index}.name`}
            control={control}
            render={({ field: { onChange, value } }) => (
              <TextField fullWidth label="Name" value={value ? value : ""} onChange={onChange} />
            )}
          />
        </Grid>

        <Grid item xs={6}>
          <Controller
            name={`players.${index}.color`}
            control={control}
            render={({ field: { onChange, value } }) => (
              <TextField fullWidth label="Color" value={value} onChange={onChange} 
              InputProps={{
                endAdornment: <InputAdornment position="end"><Box sx={{ backgroundColor: value, width: 30, height: 30, borderRadius: 2, border: "1px solid slategrey" }}></Box></InputAdornment>,
              }} />
            )}
          />
        </Grid>
      </Grid>
    </Box>
  )
}
