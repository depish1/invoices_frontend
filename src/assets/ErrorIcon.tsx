import { IconPropsType } from 'Types/IconTypes';

const ErrorIcon = ({ color, height, width }: IconPropsType) => (
  <svg fill="none" height={height} viewBox="0 0 24 24" width={width} xmlns="http://www.w3.org/2000/svg">
    <path
      clipRule="evenodd"
      d="M2 12C2 17.5141 6.4859 22 12 22C17.5141 22 22 17.5141 22 12C22 6.48591 17.5141 2 12 2C6.4859 2 2 6.48591 2 12ZM20.2266 12C20.2266 16.5522 16.5522 20.2266 12 20.2266C7.44782 20.2266 3.7734 16.5522 3.7734 12C3.7734 7.44782 7.44782 3.7734 12 3.7734C16.5522 3.7734 20.2266 7.44782 20.2266 12ZM11.1988 16.742C11.4113 16.9545 11.6995 17.0739 12 17.0739C12.3005 17.0739 12.5887 16.9545 12.8012 16.742C13.0136 16.5296 13.133 16.2414 13.133 15.9409C13.133 15.6404 13.0136 15.3522 12.8012 15.1397C12.5887 14.9273 12.3005 14.8079 12 14.8079C11.6995 14.8079 11.4113 14.9273 11.1988 15.1397C10.9864 15.3522 10.867 15.6404 10.867 15.9409C10.867 16.2414 10.9864 16.5296 11.1988 16.742ZM11.3636 13.3671C11.5273 13.5357 11.7512 13.6325 11.9861 13.6362C12.1048 13.638 12.2227 13.616 12.3327 13.5715C12.4427 13.527 12.5427 13.4608 12.6266 13.377C12.7106 13.2931 12.7769 13.1932 12.8216 13.0832C12.8661 12.9736 12.8883 12.8562 12.8867 12.7379V7.32125C12.8882 7.2041 12.8665 7.08781 12.8228 6.9791C12.779 6.87007 12.714 6.77083 12.6315 6.68715C12.549 6.60348 12.4507 6.53703 12.3422 6.49168C12.2338 6.44633 12.1175 6.42297 12 6.42297C11.8825 6.42297 11.7662 6.44633 11.6578 6.49168C11.5493 6.53703 11.451 6.60348 11.3685 6.68715C11.286 6.77083 11.221 6.87007 11.1772 6.9791C11.1335 7.08781 11.1118 7.2041 11.1133 7.32125V12.7379C11.1102 12.9725 11.2002 13.1987 11.3636 13.3671Z"
      fill={color}
      fillRule="evenodd"
    />
  </svg>
);

export default ErrorIcon;
