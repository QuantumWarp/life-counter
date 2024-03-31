import { Box, Button, Divider, Grid, Icon, IconButton, InputAdornment, TextField, ToggleButton, ToggleButtonGroup, Typography } from "@mui/material";
import ResetIcon from "@mui/icons-material/Restore"
import { usePlayer } from "../context/hooks/use-player";
import { useCounter } from "../context/hooks/use-counter";
import { useSettings } from "../context/hooks/use-settings";
import { Controller, useForm } from "react-hook-form";
import { useEffect, useMemo } from "react";

type ZoneOptionsProps = {
  index: number;
  open: boolean;
  onClose: () => void;
};

export function ZoneOptions({ index, open, onClose }: ZoneOptionsProps) {
  const { settings } = useSettings();
  const { player, setPlayer } = usePlayer(index);
  const { value } = useCounter(index);
  const top = (index === 0 || index === 3) || settings.mirror ? "100%" : "-100%";

  const defaultValues = useMemo(() => ({
    value: value,
    counterSelected: player.counterSelected,
  }), [value, player.counterSelected]);

  const { control, handleSubmit, setValue, watch, reset } = useForm({ defaultValues });

  const currentForm = watch();

  const onSubmit = (formValues: { value: number, counterSelected: number }) => {
    const counterValues = [...player.counterValues];
    counterValues[formValues.counterSelected] = formValues.value;
    setPlayer({ ...player, counterSelected: formValues.counterSelected, counterValues });
    onClose();
  };

  useEffect(() => {
    if (!open) return;
    reset(defaultValues)
  }, [open, defaultValues, reset]);

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
      <Box width="100%" maxWidth="400px">
        <Box display="flex" justifyContent="center">
          <Typography variant="h5" textAlign="center">{player.name} Options</Typography>
        </Box>
          
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container mt={0} mb={3} spacing={2}>
            <Grid item xs={6}>
              <Button size="large" fullWidth color="error" variant="outlined" onClick={onClose}>
                Cancel
              </Button>
            </Grid>
            
            <Grid item xs={6}>
              <Button size="large"fullWidth variant="outlined" type="submit">
                Apply
              </Button>
            </Grid>
          </Grid>

          <Controller
            name="value"
            control={control}
            render={({ field: { onChange, value } }) => (
              <TextField fullWidth label="Value" type="number" value={value} onChange={onChange} 
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton color="info" onClick={() => setValue("value", settings.counters[currentForm.counterSelected].start)}>
                      <ResetIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}/>
            )}
          />

          <Box>
            <Controller
              name="counterSelected"
              control={control}
              render={({ field: { onChange, value } }) => (
                <ToggleButtonGroup
                  sx={{ display: "flex", alignItems: "center", mt: 3 }}
                  orientation="vertical"
                  value={value}
                  exclusive
                  onChange={(_, value) => { onChange(value); setValue("value", player.counterValues[value]) }}
                >
                  {settings.counters.map((x, index) => (
                    <ToggleButton key={x.name} value={index} sx={{ width: "min(100%, 240px)", p: 0, height: "40px" }}>
                      <Box display="flex" alignItems="center" width="100%" height="100%">
                        <Box minWidth="40px" display="flex" alignItems="center" justifyContent="center"><Icon>{x.icon}</Icon></Box>
                        <Divider orientation="vertical" sx={{ height: "100%" }} />
                        <Box flex={1} sx={{ overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis", px: 0.5 }}>{x.name}</Box>
                        <Divider orientation="vertical" sx={{ height: "100%" }} />
                        <Box minWidth="40px">{player.counterValues[index]}</Box>
                      </Box>
                    </ToggleButton>
                  ))}
                </ToggleButtonGroup>
              )}
            />
          </Box>
        </form>
      </Box>
    </Box>
  );
}