import { IconPropsType } from '@/types/Icon';

const ChevronDownIcon = ({ color, height, width }: IconPropsType) => (
  <svg height={height} viewBox="0 0 24 24" width={width} xmlns="http://www.w3.org/2000/svg">
    <path
      clipRule="evenodd"
      d="M16.7193 13.4013L12.6462 9.2721C12.4743 9.09789 12.2412 9 11.9981 9C11.755 9 11.5219 9.09787 11.35 9.27208L7.27729 13.4009L7.27655 13.4017C7.10634 13.57 7.00731 13.7988 7.00038 14.0398C6.99507 14.2269 7.04558 14.4113 7.14531 14.5688C7.24505 14.7262 7.38935 14.8495 7.55934 14.9225C7.72933 14.9955 7.91709 15.0147 8.09805 14.9777C8.27865 14.9407 8.44409 14.8495 8.57277 14.7159L8.57351 14.7151L11.9981 11.2433L15.4231 14.7155C15.5073 14.8041 15.6081 14.8749 15.7195 14.9237C15.8315 14.9728 15.952 14.9987 16.0739 15C16.1959 15.0012 16.3168 14.9778 16.4298 14.9311C16.5427 14.8843 16.6452 14.8152 16.7315 14.7278C16.8177 14.6404 16.8859 14.5364 16.932 14.4219C16.9781 14.3074 17.0012 14.1848 17 14.0612C16.9987 13.9375 16.9732 13.8154 16.9248 13.7019C16.8766 13.5889 16.8068 13.4867 16.7193 13.4013Z"
      fill={color}
      fillRule="evenodd"
    />
  </svg>
);

export default ChevronDownIcon;
