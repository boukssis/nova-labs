import type { ReactNode } from "react";
import { Arrow } from "@/components/Arrow";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  external?: boolean;
  className?: string;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  external = false,
  className = "",
}: ButtonLinkProps) {
  const variantClass =
    variant === "primary"
      ? "bg-ember text-paper hover:bg-ember-hot"
      : "border border-line text-paper hover:border-ember-hot/60";

  return (
    <a
      href={href}
      className={`group inline-flex min-h-12 items-center justify-center gap-3 px-5 py-3 text-[15px] font-medium tracking-[-0.011em] transition-colors duration-300 ${variantClass} ${className}`}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
      {external ? <span className="sr-only"> (opens in a new tab)</span> : null}
      <Arrow />
    </a>
  );
}
