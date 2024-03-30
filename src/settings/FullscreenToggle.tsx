import { Box, Icon, IconButton } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import { MobileView } from "react-device-detect";

export function FullscreenToggle() {
  const supportsFullscreen = Boolean(document.body.requestFullscreen);
  const [fullscreen, setFullscreen] = useState(false);

  const fullscreenToggle = async () => {
    if (document.fullscreenElement) {
      await document.exitFullscreen();
    } else {
      await document.body.requestFullscreen();
    }
  };

  const checkFullscreen = useCallback(() => {
    setFullscreen(Boolean(document.fullscreenElement));
  }, [setFullscreen])

  useEffect(() => {
      window.addEventListener("fullscreenchange", checkFullscreen);
      return () => window.removeEventListener("fullscreenchange", checkFullscreen);
  }, [checkFullscreen]);

  return (
    <Box position="absolute" right={0} top={0} m={1}>
      <MobileView>
        {supportsFullscreen && (
          <IconButton size="large" onClick={fullscreenToggle}>
            <Icon>{fullscreen ? "fullscreen_exit" : "fullscreen"}</Icon>
          </IconButton>
        )}
      </MobileView>
    </Box>
  );
}
