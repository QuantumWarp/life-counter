import { Grid } from '@mui/material';
import { Zone } from './player/Zone';
import { SettingsContainer } from './settings/SettingsContainer';
import "./App.css";
import { useSettings } from './context/hooks/use-settings';

function App() {
  const { settings } = useSettings();
  const { playerCount } = settings;

  return (
    <Grid container alignItems="stretch" sx={{ height: "100vh", position: "relative", overflow: "hidden" }}>
      <SettingsContainer />

      {playerCount > 1 && (
        <Grid item xs={playerCount > 2 ? 6 : 12} sx={{ transform: settings.mirror ? "rotate(180deg)" : "auto" }}>
          <Zone index={1} />
        </Grid>
      )}

      {playerCount > 2 && (
        <Grid item xs={6} sx={{ transform: settings.mirror ? "rotate(180deg)" : "auto" }} >
          <Zone index={2} />
        </Grid>
      )}

      <Grid item xs={playerCount > 3 ? 6 : 12}>
        <Zone index={0} />
      </Grid>

      {playerCount > 3 && (
        <Grid item xs={6}>
          <Zone index={3} />
        </Grid>
      )}
    </Grid>
  )
}

export default App
