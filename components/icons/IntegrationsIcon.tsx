import * as React from "react";

const IntegrationsIcon = (props: React.ComponentProps<"svg">): JSX.Element => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <circle cx={12} cy={5} r={2}></circle>
      <circle cx={5} cy={19} r={2}></circle>
      <circle cx={19} cy={19} r={2}></circle>
      <circle cx={12} cy={14} r={3}></circle>
      <line x1={12} y1={7} x2={12} y2={11}></line>
      <line x1="6.7" y1="17.8" x2="9.5" y2="15.8"></line>
      <line x1="17.3" y1="17.8" x2="14.5" y2="15.8"></line>
    </svg>
  );
};
export default IntegrationsIcon;
