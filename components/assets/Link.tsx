import * as React from "react";
const SVGComponent = (props: any) => (
  <svg
    width={26}
    height={26}
    viewBox="0 0 26 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle
      cx={12.5977}
      cy={12.5977}
      r={11.8477}
      stroke="#60CDFF"
      strokeWidth={1.5}
    />
    <path
      d="M20.6896 13.7393C21.0801 13.3488 21.0801 12.7156 20.6896 12.3251L14.3256 5.96116C13.9351 5.57063 13.3019 5.57063 12.9114 5.96116C12.5209 6.35168 12.5209 6.98485 12.9114 7.37537L18.5682 13.0322L12.9114 18.6891C12.5209 19.0796 12.5209 19.7128 12.9114 20.1033C13.3019 20.4938 13.9351 20.4938 14.3256 20.1033L20.6896 13.7393ZM4.34399 14.0322H19.9825V12.0322H4.34399V14.0322Z"
      fill="#60CDFF"
    />
  </svg>
);
export default SVGComponent;
