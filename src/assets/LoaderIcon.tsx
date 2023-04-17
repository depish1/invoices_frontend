import { IconPropsType } from '@/types/Icon';
import { theme } from 'Styles/themes';

const LoaderIcon = ({ color = theme.colors.text1, height, width }: IconPropsType) => (
  <svg
    height={height}
    id="loader-1"
    version="1.1"
    viewBox="0 0 50 50"
    width={width}
    x="0px"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    xmlSpace="preserve"
    y="0px"
  >
    <path d="M25.251,6.461c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615V6.461z" fill={color}>
      <animateTransform
        attributeName="transform"
        attributeType="xml"
        dur="0.6s"
        from="0 25 25"
        repeatCount="indefinite"
        to="360 25 25"
        type="rotate"
      />
    </path>
  </svg>
);
export default LoaderIcon;
