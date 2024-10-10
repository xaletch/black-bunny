import { useEffect, useState } from "react";

export const useTimer = () => {
  const [time, setTime] = useState<number>(120);
  const [isCompleted, setIsCompleted] = useState<boolean>(false);

  useEffect(() => {
    if (time > 0) {
      const timer = setInterval(() => {
        setTime(prev => prev - 1);
      }, 1000);

      return () => clearInterval(timer);
    } else {
      setIsCompleted(true);
    }
  }, [time]);

  const min = Math.floor(time / 60).toString().padStart(2, "0");
  const sec = (time % 60).toString().padStart(2, "0");

  return { min, sec, isCompleted };
}