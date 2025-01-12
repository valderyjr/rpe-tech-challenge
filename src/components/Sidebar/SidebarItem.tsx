import { cn } from "@/utils/cn";
import Link from "next/link";
import { LinkHTMLAttributes, PropsWithChildren } from "react";

export type ISidebarItem = {
  href: string;
  isSelected?: boolean;
};

type SidebarItemProps = PropsWithChildren<
  ISidebarItem & {
    onClick: LinkHTMLAttributes<HTMLAnchorElement>["onClick"];
  }
>;

export function SidebarItem({
  isSelected,
  children,
  href,
  onClick,
}: SidebarItemProps) {
  return (
    <Link
      href={href}
      className={cn(
        "block p-3 rounded-lg transition-all duration-300 text-sm",
        isSelected
          ? "bg-primary text-background shadow-md font-bold"
          : "hover:bg-secondary hover:text-background text-primary font-medium"
      )}
      onClick={onClick}
    >
      {children}
    </Link>
  );
}
