import { useCallback, useState } from 'react';

export const useIsHover = () => {
  const [isHover, setIsHover] = useState(false);

  const onMouseEnter = useCallback(() => setIsHover(true), []);
  const onMouseLeave = useCallback(() => setIsHover(false), []);

  return [isHover, onMouseEnter, onMouseLeave] as const;
};
