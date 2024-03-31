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
      <Button
        sx={{
          pointerEvents: "all",
          width: "40%",
          position: "absolute",
          height: "50%",
        }}
        onClick={onOptions}
      />

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          maxWidth: "100%",
        }}
      >
        <Typography sx={{ fontSize: "calc(max(3vw, 3vh))" }}>
          {player.name}
        </Typography>

        <Box sx={{
          color: "black",
          my: "calc(-1 * max(4vw, 4vh))",
          maxWidth: "100%",
          position: "relative",
          display: "flex",
          justifyContent: "center",
        }}>
          <Typography sx={{
            fontSize: "calc(max(14vw, 14vh))",
            overflow: "auto",
            maxWidth: "100%",
          }}>
            {value}
          </Typography>
        </Box>

        <Box sx={{
          fontSize: "2vh",
          display: "flex",
          opacity: show ? 1 : 0,
          transition: "opacity 0.5s",
          alignItems: "center",
        }}>
          <Icon sx={{ mr: 1, fontSize: "calc(max(3.5vw, 3.5vh))" }}>
            {counter.icon}
          </Icon>

          <Typography sx={{ fontSize: "calc(max(2vw, 2vh))" }}>
            {counter.name}
          </Typography>
        </Box>
        <Box />
      </Box>
    </Box>
  );
}
