"use client";

import { useState } from "react";
import { Eyebrow } from "@/components/Section";
import { faqs } from "@/content/site";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" aria-labelledby="faq-title" className="border-t border-line py-24 md:py-32 lg:py-40">
      <div className="mx-auto grid w-full max-w-[1180px] gap-12 px-5 sm:px-8 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Eyebrow index="06">FAQ</Eyebrow>
          <h2 id="faq-title" className="title mt-5">
            Questions worth asking first.
          </h2>
        </div>
        <div className="border-t border-line lg:col-span-8">
          {faqs.map((item, index) => {
            const isOpen = open === index;
            const panelId = `faq-panel-${index}`;
            const buttonId = `faq-button-${index}`;
            return (
              <div key={item.question} className="border-b border-line">
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    className="flex w-full items-center justify-between gap-6 py-5 text-left text-lg tracking-[-0.02em] md:py-6 md:text-xl"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpen(isOpen ? null : index)}
                  >
                    {item.question}
                    <span aria-hidden className="font-mono text-ember">
                      {isOpen ? "–" : "+"}
                    </span>
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  aria-hidden={!isOpen}
                  className={`grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-2xl pb-6 leading-relaxed text-mute">{item.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
