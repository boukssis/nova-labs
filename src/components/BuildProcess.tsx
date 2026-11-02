"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Eyebrow } from "@/components/Section";
import { rhythm, steps } from "@/content/site";

export function BuildProcess() {
  const [index, setIndex] = useState(0);
  const reduce = useReducedMotion();
  const itemsRef = useRef<(HTMLLIElement | null)[]>([]);
  const active = steps[index] ?? steps[0];

  useEffect(() => {
    const nodes = itemsRef.current.filter((node): node is HTMLLIElement => Boolean(node));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              Math.abs(a.boundingClientRect.top - window.innerHeight * 0.35) -
              Math.abs(b.boundingClientRect.top - window.innerHeight * 0.35),
          )[0];
        if (!visible) return;
        const next = nodes.indexOf(visible.target as HTMLLIElement);
        if (next >= 0) setIndex(next);
      },
      { rootMargin: "-30% 0px -45% 0px", threshold: [0.2, 0.5] },
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  const progress = ((index + 1) / steps.length) * 100;

  return (
    <section id="process" aria-labelledby="process-title" className="border-t border-line py-24 md:py-32 lg:py-40">
      <div className="mx-auto w-full max-w-[1180px] px-5 sm:px-8">
        <div className="max-w-2xl">
          <Eyebrow index="03">How it happens</Eyebrow>
          <h2 id="process-title" className="title mt-5">
            From idea to launch.
          </h2>
          <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-mute">
            One sequence. The product changes. The order doesn&apos;t.
          </p>
        </div>

        <div className="mt-12 border-y border-line">
          <ol className="grid sm:grid-cols-3">
            {rhythm.map((item, itemIndex) => (
              <li
                key={item.label}
                className={`py-6 sm:px-6 sm:py-8 ${
                  itemIndex > 0 ? "border-t border-line sm:border-t-0 sm:border-l" : "sm:pl-0"
                }`}
              >
                <p className="font-mono text-[11px] tracking-[0.16em] text-ember uppercase">
                  0{itemIndex + 1}
                </p>
                <p className="mt-3 text-3xl tracking-[-0.04em]">{item.time}</p>
                <p className="mt-1 text-mute">{item.label}</p>
              </li>
            ))}
          </ol>
        </div>
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-mute">
          Nova&apos;s published working rhythm. A larger product moves the dates. It does not skip the steps.
        </p>

        <div className="mt-20 grid lg:grid-cols-12 lg:gap-14">
          <div className="hidden lg:col-span-5 lg:block">
            <div className="sticky top-28">
              <p className="font-mono text-[11px] tracking-[0.18em] text-mute uppercase">Now forming</p>
              <p
                className="mt-4 text-[clamp(3.4rem,5.4vw,6rem)] leading-[0.84] font-medium tracking-[-0.055em] uppercase"
                aria-hidden
              >
                {reduce ? (
                  active.word
                ) : (
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={active.word}
                      className="block"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    >
                      {active.word}
                    </motion.span>
                  </AnimatePresence>
                )}
              </p>
              <div className="mt-10 h-px w-full max-w-xs bg-line" aria-hidden>
                <div
                  className="h-px bg-ember transition-[width] duration-500"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <p className="mt-4 font-mono text-[11px] tracking-[0.16em] text-mute">
                0{index + 1} / 0{steps.length}
              </p>
            </div>
          </div>

          <div className="relative lg:col-span-7">
            <div className="absolute top-2 bottom-2 left-[3px] w-px bg-line lg:hidden" aria-hidden />
            <div
              className="absolute top-2 left-[3px] w-px origin-top bg-ember transition-[height] duration-500 lg:hidden"
              style={{ height: `calc(${progress}% - 8px)` }}
              aria-hidden
            />
            <div className="absolute top-0 bottom-0 left-0 hidden w-px bg-line lg:block" aria-hidden />
            <div
              className="absolute top-0 left-0 hidden w-px bg-ember transition-[height] duration-500 lg:block"
              style={{ height: `${progress}%` }}
              aria-hidden
            />
            <ol className="lg:pl-10">
              {steps.map((step, stepIndex) => {
                const isActive = stepIndex === index;
                return (
                  <li
                    key={step.title}
                    ref={(node) => {
                      itemsRef.current[stepIndex] = node;
                    }}
                    className="relative py-8 pl-8 first:pt-0 last:pb-0 lg:py-12 lg:pl-0"
                    aria-current={isActive ? "step" : undefined}
                  >
                    <span
                      aria-hidden
                      className={`absolute top-9 left-0 size-[7px] rounded-full lg:hidden ${
                        isActive ? "bg-ember" : "bg-paper/35"
                      }`}
                    />
                    <p className="font-mono text-[11px] tracking-[0.16em] text-ember uppercase">
                      0{stepIndex + 1}
                      <span className="ml-3 text-mute lg:hidden">{step.word}</span>
                    </p>
                    <h3 className="mt-3 text-[1.7rem] tracking-[-0.035em] md:text-[2rem]">{step.title}</h3>
                    <p className="mt-3 max-w-xl text-[17px] leading-relaxed text-mute">{step.body}</p>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
