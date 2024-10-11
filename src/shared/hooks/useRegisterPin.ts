import { useState } from "react";

export const useRegisterPin = (next: () => void) => {
  const [firstPin, setFirstPin] = useState<string>('');
  const [secondPin, setSecondPin] = useState<string>('');
  const [isOneEntry, setIsOneEntry] = useState<boolean>(true);
  const [error, setError] = useState<string | null>('');
  const [isError, setIsError] = useState<boolean>(false);

  const handleKeys = (key: string) => {
    const normalizedKey = key.toLowerCase()
    if (isOneEntry) {
      if (normalizedKey === "clear") {
        setFirstPin("");
        return;
      }
      if (normalizedKey === "delete") {
        setFirstPin((prev) => prev.slice(0, prev.length - 1));
        return;
      }

      if (firstPin.length < 4) setFirstPin(firstPin + key);
      if (firstPin.length + 1 === 4) setIsOneEntry(false);
    } else {
      if (normalizedKey === "clear") {
        setSecondPin("");
        return;
      }
      if (normalizedKey === "delete") {
        setSecondPin((prev) => prev.slice(0, prev.length - 1));
        return;
      }

      if (/^\d$/.test(normalizedKey) && secondPin.length < 4) {
        setSecondPin((prev) => prev + normalizedKey);

        if (secondPin.length + 1 === 4) {
          if (firstPin === secondPin + normalizedKey) {
            next();
            setIsError(false);
          } else {
            setError('The PIN you entered is incorrect. Please try again.');
            setIsError(true);
            setSecondPin("");
          }
        }
      }
    }
  }

  return { firstPin, secondPin, handleKeys, isOneEntry, error, isError };
}