import { Box, Button, Icon, Typography } from "@mui/material";
import { usePlayer } from "../context/hooks/use-player";
import { useCounter } from "../context/hooks/use-counter";

type ZoneForegroundProps = {
  index: number;
  show: boolean;
  onOptions: () => void;
};

export function ZoneForeground({ index, show, onOptions }: ZoneForegroundProps) {
  const { player } = usePlayer(index);
  const { counter, value } = useCounter(index);

  return (
    <Box
      sx={{
        
        position: "absolute",
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        pointerEvents: "none",
        zIndex: 1
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Typography sx={{ fontSize: "3vh" }}>
          {player.name}
        </Typography>

        <Button sx={{ color: "black", my: -6, pointerEvents: "all", }} onClick={onOptions}>
          <Typography sx={{ fontSize: "15vh" }}>{value}</Typography>
        </Button>

        <Typography sx={{ fontSize: "2vh", display: "flex", opacity: show ? 1 : 0, transition: "opacity 0.5s" }}>
          <Icon fontSize="large" sx={{ mr: 1 }}>
            {counter.icon}
          </Icon>
          {counter.name}
        </Typography>
        <Box />
      </Box>
    </Box>
  );
}
