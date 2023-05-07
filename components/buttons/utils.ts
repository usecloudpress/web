// Playground for styles: https://play.tailwindcss.com/6rsARp3rJ6

import classNames from "classnames";
import { BaseButtonProps } from "./types";

const variantClasses = {
  default: {
    base: "bg-white text-gray-700 ring-1 ring-inset ring-gray-300",
    enabled:
      "hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600",
    disabled: "opacity-50 cursor-default",
  },
  primary: {
    base: "bg-blue-600 text-white",
    enabled:
      "hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600",
    disabled: "opacity-50 cursor-default",
  },
  secondary: {
    base: "bg-blue-50 text-blue-700",
    enabled:
      "hover:bg-blue-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600",
    disabled: "opacity-50 cursor-default",
  },
};

const sizeClasses = {
  sm: "px-3.5 py-2 text-sm",
  md: "px-4 py-2.5 text-sm",
  lg: "px-4 py-2.5 text-base",
  xl: "px-5 py-3 text-base",
  "2xl": "px-7 py-4 text-lg",
};

const calculateButtonClasses = ({
  variant = "default",
  size = "lg",
  isDisabled = false,
  className,
}: BaseButtonProps<HTMLElement>): string => {
  const specifiedVariantClasses = variantClasses[variant];
  const specifiedSizeClasses = sizeClasses[size];

  return classNames(
    className,
    "inline-flex items-center justify-center rounded-lg font-semibold shadow-sm",
    specifiedVariantClasses.base,
    specifiedSizeClasses,
    isDisabled
      ? specifiedVariantClasses.disabled
      : specifiedVariantClasses.enabled
  );
};

export default calculateButtonClasses;

/*
<div className="flex items-start gap-x-4 gap-y-4 p-4">
    <!-- sm -->
    <button type="button"
            className="rounded-lg bg-blue-600 px-3.5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">Button
        text
    </button>
    <!-- md -->
    <button type="button"
            className="rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">Button
        text
    </button>
    <!-- lg -->
    <button type="button"
            className="rounded-lg bg-blue-600 px-4 py-2.5 text-base font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">Button
        text
    </button>
    <!-- xl -->
    <button type="button"
            className="rounded-lg bg-blue-600 px-5 py-3 text-base font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">Button
        text
    </button>
    <!-- 2xl -->
    <button type="button"
            className="rounded-lg bg-blue-600 px-7 py-4 text-lg font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">Button
        text
    </button>
    <!-- secondary -->
    <button type="button"
            className="rounded-lg bg-white px-7 py-4 text-lg font-semibold text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">Button
        text
    </button>
</div>
*/
