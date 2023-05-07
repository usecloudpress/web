import React, { forwardRef } from "react";
import { BaseButtonProps } from "./types";
import calculateButtonClasses from "./utils";

export interface ButtonProps
  extends React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    BaseButtonProps<HTMLButtonElement> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const { children, type = "button", isDisabled, ...other } = props;
  const allClassNames = calculateButtonClasses(props);

  return (
    <button
      ref={ref}
      // eslint-disable-next-line react/button-has-type
      type={type}
      {...other}
      disabled={isDisabled}
      className={allClassNames}
    >
      {children}
    </button>
  );
});

Button.displayName = "Button";
export default Button;
