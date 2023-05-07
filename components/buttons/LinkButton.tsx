import React, { forwardRef } from "react";
import { BaseButtonProps } from "./types";
import calculateButtonClasses from "./utils";

interface LinkButtonProps
  extends React.DetailedHTMLProps<
      React.AnchorHTMLAttributes<HTMLAnchorElement>,
      HTMLAnchorElement
    >,
    BaseButtonProps<HTMLAnchorElement> {}

const LinkButton = forwardRef<HTMLAnchorElement, LinkButtonProps>(
  (props, ref) => {
    const { children, href, isDisabled } = props;
    const allClassNames = calculateButtonClasses(props);

    if (isDisabled) {
      return (
        <span ref={ref} className={allClassNames}>
          {children}
        </span>
      );
    }

    return (
      <a ref={ref} href={href} className={allClassNames}>
        {children}
      </a>
    );
  }
);

LinkButton.displayName = "LinkButton";
export default LinkButton;
