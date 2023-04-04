import { useCallback, useState } from 'react';

export const useCountDown = (initialCount = 3) => {
  const [counter, setCounter] = useState<number>(initialCount);

  const countDown = useCallback((currCounter: number) => setCounter(--currCounter), []);

  return [counter, countDown] as const;
};
