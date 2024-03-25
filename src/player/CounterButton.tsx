import { Button } from "@mui/material";

type CounterButtonProps = {
  amount: number;
  update: (amount: number) => void;
}

export function CounterButton({ amount, update }: CounterButtonProps) {
  const positive = amount > 0;
  return (
    <Button
      sx={{
        flex: 1,
        fontSize: "4vh",
        display: "flex",
        justifyContent: positive ? "flex-end" : "flex-start",
        padding: 3,
        color: "grey"
      }}
      onClick={() => update(amount)}
    >
      {positive ? "+" : ""}{amount}
    </Button>
  )
}