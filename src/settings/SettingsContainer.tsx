import { Box, Button } from "@mui/material";
import { useState } from "react";
import SettingsIcon from "@mui/icons-material/Settings";
import SettingsMenu from "./SettingsMenu";

function SettingsContainer() {
  const [collapsed, setCollapsed] = useState(true);
  
  return (
    <Box sx={{
      position: "absolute",
      backgroundColor: "lightgrey",
      width: collapsed ? "100px" : "100vw",
      height: collapsed ? "100px" : "100vh",
      borderRadius: collapsed ? "50%" : 0,
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      marginLeft: "auto",
      marginRight: "auto", 
      marginTop: "auto",
      marginBottom: "auto",
      transition: "0.2s"
    }}>
      <Button sx={{
        position: "absolute",
        opacity: collapsed ? 1 : 0,
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        marginLeft: "auto",
        marginRight: "auto", 
        marginTop: "auto",
        marginBottom: "auto",
        transition: "0.2s"
      }}
      onClick={() => setCollapsed(false)}>
        <SettingsIcon fontSize="large" />
      </Button>
      <Box sx={{ color: "white", pointerEvents: collapsed ? "none" : "auto", opacity: collapsed ? 0 : 1, transition: "0.2s" }}>
        <SettingsMenu onClose={() => setCollapsed(true)} /> 
      </Box>
    </Box>
  )

}
export default SettingsContainer;
