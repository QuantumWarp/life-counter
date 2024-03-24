import { Box, Button, Grid, Icon, IconButton, InputAdornment, TextField, Typography } from "@mui/material";
import { Controller, UseFormReturn, useFieldArray } from "react-hook-form";
import { Settings } from "../models/settings";
import DeleteIcon from "@mui/icons-material/Delete";

type CountersSettingsType = {
  form: UseFormReturn<Settings>;
  index: number;
}

function CountersSettings({ index, form }: CountersSettingsType) {
  const { control } = form;
  const { fields, append, remove } = useFieldArray({ control, name: `current.${index}.counters` });

  return (
    <Box>
      <Typography display="flex" justifyContent="center" variant="h6" my={2}>
        Counters
      </Typography>

      {fields.map((field, counterIndex) => (
        <Grid container spacing={1} key={field.id} mb={2}>
          <Grid item xs={5}>
            <Controller
              name={`current.${index}.counters.${counterIndex}.name`}
              control={control}
              render={({ field: { onChange, value } }) => (
                <TextField
                  fullWidth
                  label="Name"
                  value={value}
                  onChange={onChange}
                />
              )}
            />
          </Grid>

          <Grid item xs={2}>
            <Controller
              name={`current.${index}.counters.${counterIndex}.start`}
              control={control}
              render={({ field: { onChange, value } }) => (
                <TextField fullWidth label="Default" type="number" value={value} onChange={onChange} />
              )}
            />
          </Grid>

          <Grid item xs={4}>
            <Controller
              name={`current.${index}.counters.${counterIndex}.icon`}
              control={control}
              render={({ field: { onChange, value } }) => (
                <TextField fullWidth label="Icon" value={value} onChange={onChange} 
                InputProps={{
                  endAdornment: <InputAdornment position="end"><Icon>{value}</Icon></InputAdornment>,
                }} />
              )}
            />
          </Grid>

          <Grid item xs={1} alignItems="center" display="flex">
            <IconButton color="error" onClick={() => remove(counterIndex)}>
              <DeleteIcon />
            </IconButton>
          </Grid>
        </Grid>
      ))}

      <Box display="flex" justifyContent="center" mt={2}>
        <Button  variant="outlined" onClick={() => append({ icon: "", name: "Counter", start: 10 })}>
          Add
        </Button>
      </Box>
    </Box>
  )
}

export default CountersSettings;