import { useState } from "react";

export const useLoginPin = (next: () => void) => {
  const [firstPin, setFirstPin] = useState<string>('');
  const [secondPin, setSecondPin] = useState<string>('');
  const [isOneEntry, setIsOneEntry] = useState<boolean>(true);
  const [error, setError] = useState<string | null>('');
  const [isError, setIsError] = useState<boolean>(false);

  const handleKeys = (key: string) => {
    if (isOneEntry) {
      if (firstPin.length < 4) setFirstPin(firstPin + key);
      if (firstPin.length + 1 === 4) setIsOneEntry(false);
    } else {
      if (secondPin.length < 4) setSecondPin(secondPin + key);

      if (secondPin.length + 1 === 4) {
        if (firstPin === secondPin + key) {
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

  return { firstPin, secondPin, handleKeys, isOneEntry, error, isError };
}