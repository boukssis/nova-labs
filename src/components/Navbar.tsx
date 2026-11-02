"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { links, nav } from "@/content/site";
import { Wordmark } from "@/components/Wordmark";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const nodes = nav
      .map((item) => document.getElementById(item.id))
      .filter((node): node is HTMLElement => Boolean(node));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(visible.target.id);
      },
      { rootMargin: "-40% 0px -45% 0px", threshold: [0.1, 0.35, 0.6] },
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const content = document.getElementById("content");
    const footer = document.querySelector("footer");
    content?.setAttribute("inert", "");
    footer?.setAttribute("inert", "");
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);

    return () => {
      content?.removeAttribute("inert");
      footer?.removeAttribute("inert");
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        open
          ? "border-b border-line bg-ink"
          : scrolled
            ? "border-b border-line bg-ink/85 backdrop-blur-md"
            : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-[4.5rem] max-w-[1180px] items-center justify-between gap-6 px-5 sm:px-8">
        <a href="/" className="text-[1.05rem]" aria-label="Nova Labs, home">
          <Wordmark />
        </a>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
          {nav.map((item) => {
            const isActive = active === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                aria-current={isActive ? "true" : undefined}
                className={`inline-flex items-center gap-2 text-[13px] tracking-[-0.01em] transition-colors duration-300 ${
                  isActive ? "text-paper" : "text-mute hover:text-paper"
                }`}
              >
                {isActive ? (
                  <span aria-hidden className="size-1 rounded-full bg-ember" />
                ) : null}
                {item.label}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={links.apply}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden min-h-10 items-center bg-ember px-4 text-[12px] font-medium tracking-[0.14em] text-paper uppercase transition-colors duration-300 hover:bg-ember-hot lg:inline-flex"
          >
            Start Building
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            <span className="relative block h-3 w-5">
              <span
                className={`absolute left-0 h-px w-5 bg-paper transition-transform duration-300 ${
                  open ? "top-1.5 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 h-px w-5 bg-paper transition-transform duration-300 ${
                  open ? "top-1.5 -rotate-45" : "bottom-0"
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.nav
            id="mobile-nav"
            aria-label="Mobile"
            className="fixed inset-x-0 top-[4.5rem] bottom-0 z-40 flex flex-col bg-ink px-5 pt-6 pb-10 sm:px-8 lg:hidden"
            style={{ backgroundColor: "var(--ink)" }}
            initial={reduce ? false : { y: -10 }}
            animate={{ y: 0 }}
            exit={reduce ? undefined : { y: -10 }}
            transition={{ duration: reduce ? 0 : 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            <ul className="flex flex-col">
              {nav.map((item, index) => (
                <li key={item.id} className="border-t border-line">
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="flex items-baseline justify-between py-4 text-[1.7rem] tracking-[-0.04em]"
                  >
                    {item.label}
                    <span className="font-mono text-[11px] tracking-[0.16em] text-mute">
                      0{index + 1}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
            <a
              href={links.apply}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto inline-flex min-h-12 items-center justify-center bg-ember px-5 text-[15px] font-medium text-paper"
            >
              Start Building
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
