import { Eyebrow, Section } from "@/components/Section";
import { process } from "@/content/site";

export function BuildProcess() {
  return (
    <Section id="process" labelledBy="process-title" className="border-t border-line">
      <div className="max-w-xl">
        <Eyebrow index="03">Process</Eyebrow>
        <h2 id="process-title" className="title mt-5">
          From idea to launch.
        </h2>
      </div>

      <ol className="mt-16 grid border border-line md:grid-cols-3">
        {process.map((step, index) => (
          <li
            key={step.title}
            className={`relative bg-ink-2/35 px-6 py-10 md:px-8 md:py-12 ${
              index > 0 ? "border-t border-line md:border-t-0 md:border-l" : ""
            }`}
          >
            {index < process.length - 1 ? (
              <span
                aria-hidden
                className="absolute top-1/2 right-0 z-10 hidden size-2.5 translate-x-1/2 -translate-y-1/2 rounded-full bg-ember md:block"
              />
            ) : null}
            <p className="font-mono text-[11px] tracking-[0.16em] text-ember uppercase">
              {step.index}
            </p>
            <p className="mt-5 text-[2rem] tracking-[-0.04em] text-paper md:text-[2.25rem]">
              {step.time}
            </p>
            <h3 className="mt-2 text-lg tracking-[-0.02em] text-paper uppercase">
              {step.title}
            </h3>
            <p className="mt-4 max-w-xs text-[16px] leading-relaxed text-mute">{step.body}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
