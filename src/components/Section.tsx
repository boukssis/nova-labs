import type { ReactNode } from "react";

export function Eyebrow({
  index,
  children,
}: {
  index: string;
  children: ReactNode;
}) {
  return (
    <p className="font-mono text-[11px] font-medium tracking-[0.18em] text-mute uppercase">
      <span className="text-ember">{index}</span>
      <span className="mx-2.5 text-paper/35" aria-hidden>
        /
      </span>
      {children}
    </p>
  );
}

export function Section({
  id,
  labelledBy,
  children,
  className = "",
}: {
  id?: string;
  labelledBy?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={`py-24 md:py-32 lg:py-40 ${className}`}
    >
      <div className="mx-auto w-full max-w-[1180px] px-5 sm:px-8">{children}</div>
    </section>
  );
}
