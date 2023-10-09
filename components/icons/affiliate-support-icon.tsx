import * as React from "react";

const AffiliateSupportIcon = (
  props: React.ComponentProps<"svg">
): JSX.Element => {
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
      <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
      <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
      <path d="M15 15l3.35 3.35"></path>
      <path d="M9 15l-3.35 3.35"></path>
      <path d="M5.65 5.65l3.35 3.35"></path>
      <path d="M18.35 5.65l-3.35 3.35"></path>
    </svg>
  );
};
export default AffiliateSupportIcon;
