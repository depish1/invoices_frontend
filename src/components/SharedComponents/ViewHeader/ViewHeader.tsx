import { ButtonWrapper, Header, Headline } from './ViewHeader.style';
import { PixelSizeType, RemSizeType } from 'Types/ThemeTypes';
import { capitalizeFirstLetter } from 'Helpers/capitalizeFirstLetter';

interface IViewHeaderProps {
  button?: JSX.Element;
  icon?: JSX.Element;
  isSecondaryTextColor?: boolean;
  marginBottom?: PixelSizeType | RemSizeType;
  text: string;
}

const ViewHeader = ({ button, icon, isSecondaryTextColor = false, marginBottom, text }: IViewHeaderProps) => (
  <Header isButton={!!button} marginBottom={marginBottom}>
    {icon && icon}
    <Headline isSecondaryTextColor={isSecondaryTextColor}>{capitalizeFirstLetter(text)}</Headline>
    {button && <ButtonWrapper>{button}</ButtonWrapper>}
  </Header>
);

export default ViewHeader;