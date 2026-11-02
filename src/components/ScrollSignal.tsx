"use client";

import { useEffect, useRef } from "react";

export function ScrollSignal() {
  const desktopRef = useRef<HTMLDivElement>(null);
  const mobileRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const progress = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      if (desktopRef.current) {
        desktopRef.current.style.transform = `scaleY(${progress})`;
      }
      if (mobileRef.current) {
        mobileRef.current.style.transform = `scaleX(${progress})`;
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <>
      <div
        ref={desktopRef}
        aria-hidden
        className="pointer-events-none fixed top-0 left-0 z-40 hidden h-svh w-px origin-top bg-ember md:block"
        style={{ transform: "scaleY(0)" }}
      />
      <div
        ref={mobileRef}
        aria-hidden
        className="pointer-events-none fixed top-0 left-0 z-[60] h-0.5 w-full origin-left bg-ember md:hidden"
        style={{ transform: "scaleX(0)" }}
      />
    </>
  );
}
