import * as React from "react";

const AffiliateSingularFocusIcon = (
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
      <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
      <path d="M12 3l0 4"></path>
      <path d="M12 21l0 -3"></path>
      <path d="M3 12l4 0"></path>
      <path d="M21 12l-3 0"></path>
      <path d="M12 12l0 .01"></path>
    </svg>
  );
};
export default AffiliateSingularFocusIcon;
