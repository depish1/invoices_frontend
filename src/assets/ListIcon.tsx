import { IconPropsType } from '@/types/Icon';

const ListIcon = ({ color, height, width }: IconPropsType) => (
  <svg height={height} viewBox="0 0 24 24" width={width}>
    <path
      d="M11 15H17V17H11V15M9 7H7V9H9V7M11 13H17V11H11V13M11 9H17V7H11V9M9 11H7V13H9V11M21 5V19C21 20.1 20.1 21 19 21H5C3.9 21 3 20.1 3 19V5C3 3.9 3.9 3 5 3H19C20.1 3 21 3.9 21 5M19 5H5V19H19V5M9 15H7V17H9V15Z"
      fill={color}
    />
  </svg>
);

export default ListIcon;
