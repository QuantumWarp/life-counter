import SettingsIcon from "@mui/icons-material/Settings";
import { Box, IconButton } from "@mui/material";
import { useState } from "react";
import { SettingsMenu } from "./SettingsMenu";

export function SettingsContainer() {
  const [collapsed, setCollapsed] = useState(true);
  
  return (
    <Box
      sx={{
        position: "absolute",
        width:"100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <Box
        sx={{
          position: "relative",
          background: "radial-gradient(black, lightgrey)",
          width: "100vw",
          height: "100vh",
          borderRadius: 0,
          transition: ".2s",
          overflow: "hidden",
          zIndex: 5,
          ...(collapsed && {
            width: "100px",
            height: "100px",
            borderRadius: "50%",
          })
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

        <Box 
          sx={{
            position: "absolute",
            left: 0,
            top: 0,
            width: "100%",
            height: "100%",
            borderRadius: collapsed ? "50%" : 0,
            opacity: collapsed ? 1 : 0,
            border: "5px solid black",
            pointerEvents: "none",
            transition: ".2s",
          }}
        />

        <Box
          sx={{
            position: "absolute",
            width: "100vw",
            height: "100vh",
            backgroundColor: "lightgrey",
            zIndex: 10,
            left: 0,
            top: 0,
            pointerEvents: "auto",
            opacity: 1,
            transition: ".2s",
            ...(collapsed && {
              left: "calc(-50vw + 50px)",
              top: "calc(-50vh + 50px)",
              pointerEvents: "none",
              opacity: 0,
            })
          }}
        >
          <SettingsMenu onClose={() => setCollapsed(true)} /> 
        </Box>
      </Box>
    </Box>
  )
}
