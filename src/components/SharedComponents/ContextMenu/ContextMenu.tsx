import { useTheme } from 'styled-components';
import { FloatingPortal } from '@floating-ui/react';
import { MouseEvent, ReactNode } from 'react';

import { ButtonWrapper, ContextMenuWrapper, Option } from './ContextMenu.style';
import { OptionConfigType } from './ContextMenu.type';
import { useContextMenu } from './useContextMenu';
import ContextMenuIcon from 'Icons/ContextMenuIcon';

interface IContextMenuProps {
  defaultOpen?: boolean;
  options: OptionConfigType[];
  renderReferenceContent?: (isMenuOpen: boolean) => ReactNode;
}

export const ContextMenu = ({ defaultOpen = false, options, renderReferenceContent }: IContextMenuProps) => {
  const { colors } = useTheme();
  const {
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
  } = useContextMenu(defaultOpen);

  const handleButtonClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    toggleMenu();
  };

  const handleOptionClick = (e: MouseEvent<HTMLButtonElement>, callback: (e?: MouseEvent<HTMLButtonElement>) => void) => {
    e.stopPropagation();
    callback();
    closeMenu();
  };

  return (
    <>
      <ButtonWrapper ref={reference} onClick={handleButtonClick} onMouseEnter={onReferenceMouseEnter} onMouseLeave={onReferenceMouseLeave}>
        {renderReferenceContent === undefined ? (
          <ContextMenuIcon color={colors.text1} height="2.2rem" width="2.2rem" />
        ) : (
          renderReferenceContent(isContextMenuOpen)
        )}
      </ButtonWrapper>
      {isContextMenuOpen && (
        <FloatingPortal>
          <ContextMenuWrapper
            ref={floating}
            onMouseEnter={onFloatingMouseEnter}
            onMouseLeave={onFloatingMouseLeave}
            style={{
              position: strategy,
              top: y ?? 0,
              left: x ?? 0,
            }}
          >
            {options.map(({ callback, label }) => (
              <Option key={label} onClick={(e) => handleOptionClick(e, callback)}>
                {label}
              </Option>
            ))}
          </ContextMenuWrapper>
          ,
        </FloatingPortal>
      )}
    </>
  );
};
