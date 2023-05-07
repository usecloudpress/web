import { HTMLAttributes } from "react";

export type ButtonVariant = "default" | "primary" | "secondary";

export type ButtonSize = "sm" | "md" | "lg" | "xl" | "2xl";

export interface BaseButtonProps<T> extends HTMLAttributes<T> {
  isDisabled?: boolean;
  size?: ButtonSize;
  variant?: ButtonVariant;
}
