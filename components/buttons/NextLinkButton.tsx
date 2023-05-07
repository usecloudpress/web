import React, { forwardRef } from "react";
import Link, { LinkProps } from "next/link";
import { BaseButtonProps } from "./types";
import calculateButtonClasses from "./utils";

interface NextLinkButtonProps
  extends Omit<LinkProps, "children">,
    BaseButtonProps<HTMLAnchorElement> {}

const NextLinkButton = forwardRef<HTMLAnchorElement, NextLinkButtonProps>(
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
      <Link ref={ref} href={href} className={allClassNames}>
        {children}
      </Link>
    );
  }
);
NextLinkButton.displayName = "RouteButton";
export default NextLinkButton;
