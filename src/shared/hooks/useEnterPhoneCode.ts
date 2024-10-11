import { useState } from "react";

export const useEnterPhoneCode = (confirm: () => void) => {
  const [code, setCode] = useState<string[]>(Array(5).fill(""));
  // const [error, setError] = useState<string>('');
  const [isError, setIsError] = useState<boolean>(false);

  const handleCode = (v: string, i: number) => {
    const newCode= [...code];

    newCode[i] = v.slice(0, 1);
    setCode(newCode);

    if (v && i < 5 - 1) {
      const next = document.getElementById(`code-input-${i + 1}`);
      setIsError(false);

      if (next) next.focus();
    }
  }

  const handleSubmit = () => {
    if (code.length === 5 && code[4] !== '') {
      confirm();
    } else {
      setIsError(true);
    }
  }

  return { code, isError, handleCode, handleSubmit }
}