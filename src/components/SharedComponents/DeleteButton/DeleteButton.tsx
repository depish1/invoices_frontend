import { MouseEvent } from 'react';
import { useTheme } from 'styled-components';

import { ButtonWrapper } from './DeleteButton.style';
import { PixelSizeType, RemSizeType } from 'Types/Theme';
import { TrashIcon } from 'Icons/TrashIcon';

interface IDeleteButtonProps {
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
  size?: PixelSizeType | RemSizeType;
}

export const DeleteButton = ({ onClick, size = '3rem' }: IDeleteButtonProps) => {
  const { colors } = useTheme();

  return (
    <ButtonWrapper onClick={onClick}>
      <TrashIcon color={colors.error} height={size} width={size} />
    </ButtonWrapper>
  );
};
