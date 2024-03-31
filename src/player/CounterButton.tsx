import { Button, Typography } from "@mui/material";

type CounterButtonProps = {
  amount: number;
  primary?: boolean;
  show: boolean;
  update: (amount: number) => void;
}

export function CounterButton({ amount, show, update, primary }: CounterButtonProps) {
  const positive = amount > 0;
  return (
    <Button
      sx={{
        flex: primary ? 4 : 1,
        display: "flex",
        justifyContent: positive ? "flex-end" : "flex-start",
        padding: 2,
        color: "grey",
      }}
      onClick={() => update(amount)}
    >
      <Typography sx={{ opacity: show ? 1 : 0, transition: "opacity 0.5s", fontSize: "calc(max(3vh, 3vw))" }}>{positive ? "+" : ""}{amount}</Typography>
    </Button>
  )
}