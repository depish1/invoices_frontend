import { IconPropsType } from 'Types/IconTypes';

const PlusIcon = ({ color, height, width }: IconPropsType) => (
  <svg height={height} viewBox="0 0 24 24" width={width}>
    <path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" fill={color} />
  </svg>
);

export default PlusIcon;
