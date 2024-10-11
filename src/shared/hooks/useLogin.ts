import { useState } from "react"

export const useLogin = (next: () => void) => {
  const [pin, setPin] = useState<string>("");
  const [isError, setIsError] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const handleKey = (key: string) => {
    const normalizedKey = key.toLowerCase();

    if (normalizedKey === "clear") {
      setPin("");
      setIsError(false);
      return;
    }
    if (normalizedKey === "delete") {
      setPin(prev => prev.slice(0, prev.length - 1));
      return;
    }

    if (pin.length < 4) setPin(pin + key);

    setIsError(false);
    setError("");

    if (pin.length + 1 === 4) {
      next();
      
      setPin("");
      setError("");
      setIsError(false);
    }
  }

  return { pin, handleKey, isError, error };
}