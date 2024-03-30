import { useState } from "react";

export const useStateTimeout = <T>(
  initialValue: T, timeoutMillis: number
): [T, (newValue: T) => void] => {
  const [value, setValue] = useState(initialValue);
  const [timeoutId, setTimeoutId] = useState<number>();

  const setValueTimeout = (newValue: T) => {
    setValue(newValue);
    clearTimeout(timeoutId);
    const newTimeoutId = setTimeout(
      () => setValue(initialValue),
      timeoutMillis,
    );
    setTimeoutId(newTimeoutId);
  };

  return [value, setValueTimeout]
};
