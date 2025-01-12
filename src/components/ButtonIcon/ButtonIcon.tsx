"use client";
import { cn } from "@/utils/cn";
import { ButtonHTMLAttributes, PropsWithChildren } from "react";

type ButtonIconProps = PropsWithChildren<{
  onClick?: ButtonHTMLAttributes<HTMLButtonElement>["onClick"];
  ariaLabel?: string;
  className?: string;
  variant?: "primary" | "secondary";
}>;

const baseClassByVariant = {
  primary: "bg-white rounded-lg",
  secondary: "text-secondary hover:bg-background",
};

export function ButtonIcon({
  children,
  onClick,
  ariaLabel,
  className = "",
  variant = "primary",
}: ButtonIconProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "p-2 rounded-lg transition-colors",
        baseClassByVariant[variant],
        className
      )}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
