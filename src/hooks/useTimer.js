import { useState, useEffect } from 'react';

function useTimer(initialSeconds, isActive, onExpire) {
  const [timeLeft, setTimeLeft] = useState(initialSeconds);
  const [resetKey, setResetKey] = useState(0);

  useEffect(() => {
    if (!isActive) return;

    setTimeLeft(initialSeconds);

    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          onExpire();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isActive, resetKey]);

  const reset = () => setResetKey((prev) => prev + 1);

  return { timeLeft, reset };
}

export default useTimer;