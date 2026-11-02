import { Eyebrow, Section } from "@/components/Section";
import { capabilities } from "@/content/site";

const marks = [
  // product node
  <svg key="a" viewBox="0 0 48 48" className="size-10 text-ember" aria-hidden>
    <rect x="8" y="10" width="14" height="14" rx="2" fill="currentColor" opacity="0.9" />
    <rect x="26" y="10" width="14" height="14" rx="2" fill="currentColor" opacity="0.35" />
    <rect x="8" y="28" width="14" height="14" rx="2" fill="currentColor" opacity="0.35" />
    <rect x="26" y="28" width="14" height="14" rx="2" fill="currentColor" opacity="0.55" />
  </svg>,
  // system / automation
  <svg key="b" viewBox="0 0 48 48" className="size-10 text-ember" aria-hidden>
    <circle cx="12" cy="24" r="4" fill="currentColor" />
    <circle cx="24" cy="12" r="3" fill="currentColor" opacity="0.55" />
    <circle cx="36" cy="24" r="4" fill="currentColor" />
    <circle cx="24" cy="36" r="3" fill="currentColor" opacity="0.55" />
    <path
      d="M15 22.5 21.5 15M26.5 15 33 22.5M33 25.5 26.5 33M21.5 33 15 25.5"
      stroke="currentColor"
      strokeWidth="1.5"
      fill="none"
      opacity="0.45"
    />
  </svg>,
  // partnership
  <svg key="c" viewBox="0 0 48 48" className="size-10 text-ember" aria-hidden>
    <path
      d="M10 34V18l14-8 14 8v16l-14 8-14-8Z"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
    />
    <path d="M24 10v32M10 18l14 8 14-8" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.45" />
  </svg>,
];

export function Capabilities() {
  return (
    <Section id="build" labelledBy="build-title" className="border-t border-line">
      <div className="max-w-xl">
        <Eyebrow index="01">What we build</Eyebrow>
        <h2 id="build-title" className="title mt-5">
          What we build.
        </h2>
      </div>

      <div className="mt-16 grid gap-px border border-line bg-line md:grid-cols-3">
        {capabilities.map((item, index) => (
          <article key={item.title} className="bg-ink px-6 py-10 md:px-8 md:py-12">
            <div className="flex items-start justify-between gap-4">
              {marks[index]}
              <p className="font-mono text-[11px] tracking-[0.16em] text-mute">0{index + 1}</p>
            </div>
            <h3 className="mt-10 text-[1.55rem] tracking-[-0.035em] text-paper md:text-[1.75rem]">
              {item.title}
            </h3>
            <p className="mt-3 max-w-[22rem] text-[16px] leading-relaxed text-mute">{item.body}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
