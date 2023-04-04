import { offset, shift, useFloating } from '@floating-ui/react';
import { useCallback, useEffect, useState } from 'react';

import { useIsHover } from 'Hooks/useIsHover';

export const useContextMenu = (defaultOpen: boolean) => {
  const [isContextMenuOpen, setIsContextMenuOpen] = useState(defaultOpen);
  const [isReferenceHover, onReferenceMouseEnter, onReferenceMouseLeave] = useIsHover();
  const [isFloatingHover, onFloatingMouseEnter, onFloatingMouseLeave] = useIsHover();

  const { x, y, reference, floating, strategy } = useFloating({
    placement: 'bottom-end',
    middleware: [offset(4), shift()],
  });

  const closeMenu = useCallback(() => setIsContextMenuOpen(false), []);
  const toggleMenu = useCallback(() => setIsContextMenuOpen((prev) => !prev), []);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      !isReferenceHover && !isFloatingHover && closeMenu();
    }, 250);

    return () => clearTimeout(timeoutId);
  }, [closeMenu, isFloatingHover, isReferenceHover]);

  return {
    isContextMenuOpen,
    closeMenu,
    toggleMenu,
    x,
    y,
    reference,
    floating,
    strategy,
    onReferenceMouseEnter,
    onReferenceMouseLeave,
    onFloatingMouseEnter,
    onFloatingMouseLeave,
  };
};
