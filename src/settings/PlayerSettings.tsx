import { Box, Grid, IconButton, InputAdornment, TextField, Typography } from "@mui/material";
import { Controller, UseFormReturn } from "react-hook-form";
import { Settings } from "../models/settings";
import EastIcon from "@mui/icons-material/East";
import WestIcon from "@mui/icons-material/West";
import CountersSettings from "./CountersSettings";

type PlayerSettingsType = {
  form: UseFormReturn<Settings>;
  index: number;
  separate: boolean;
  next: () => void;
  previous: () => void;
}

function PlayerSettings({ index, form, separate, next, previous }: PlayerSettingsType) {
  const { control } = form;

  return (
    <Box>
      <Box display="flex">
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
            name={`current.${index}.name`}
            control={control}
            render={({ field: { onChange, value } }) => (
              <TextField fullWidth label="Name" value={value ? value : ""} onChange={onChange} />
            )}
          />
        </Grid>

        <Grid item xs={6}>
          <Controller
            name={`current.${index}.color`}
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

      {(separate || index === 0) && (
        <CountersSettings
          index={index}
          form={form}
        />
      )}
    </Box>
  )
}

export default PlayerSettings;
