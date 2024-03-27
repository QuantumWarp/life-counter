import SettingsIcon from "@mui/icons-material/Settings";
import { Box, IconButton } from "@mui/material";
import { useState } from "react";
import { SettingsMenu } from "./SettingsMenu";
import { useSettings } from "../context/hooks/use-settings";

export function SettingsContainer() {
  const { settings } = useSettings();
  const [collapsed, setCollapsed] = useState(true);
  const single = settings.playerCount === 1;
  const size = single ? "min(30vw, 30vh)" : "min(20vw, 20vh)";
  
  return (
    <Box
      sx={{
        position: "absolute",
        width:"100vw",
        height: "100vh",
        overflow: "hidden"
      }}
    >
      <Box
        sx={{
          position: "relative",
          background: "radial-gradient(black, lightgrey)",
          borderRadius: "50%",
          transition: ".2s",
          overflow: "hidden",
          border: "5px solid black",
          zIndex: 5,
          width: `calc(${size})`,
          height: `calc(${size})`,
          left: `calc(50vw - 0.5 * ${size})`,
          top: single ? `calc(100vh - 0.5 * ${size})` : `calc(50vh - 0.5 * ${size})`
        }}
      >
        {collapsed && (
          <IconButton
            sx={{ color: "white", width: "100%", height: "100%" }}
            onClick={() => setCollapsed(false)}
          >
            <SettingsIcon fontSize="large" />
          </IconButton>
        )}
      </Box>


      <Box
        sx={{
          position: "absolute",
          width: "100vw",
          height: "100vh",
          backgroundColor: "lightgrey",
          zIndex: 10,
          pointerEvents: "auto",
          transition: ".2s",
          top: collapsed ? "100vh" : 0
        }}
      >
        <SettingsMenu onClose={() => setCollapsed(true)} /> 
      </Box>
    </Box>
  )
}
