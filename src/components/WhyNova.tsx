import { Eyebrow, Section } from "@/components/Section";
import { audience, reasons } from "@/content/site";

export function WhyNova() {
  return (
    <Section id="why" labelledBy="why-title" className="border-t border-line">
      <div className="max-w-xl">
        <Eyebrow index="05">Why Nova</Eyebrow>
        <h2 id="why-title" className="title mt-5">
          Not another development agency.
        </h2>
        <p className="mt-5 max-w-md text-[17px] leading-relaxed text-mute">
          AI where it matters. Not where it looks impressive.
        </p>
      </div>

      <div className="mt-12 grid md:grid-cols-2">
        <div className="border border-line p-6 md:border-r-0 md:p-8">
          <p className="font-mono text-[11px] tracking-[0.16em] text-mute uppercase">Usual</p>
          <p className="mt-6 text-[1.45rem] leading-[1.2] tracking-[-0.03em] text-mute md:text-[1.7rem]">
            Broken process
            <span className="mt-1.5 block text-paper/70">+ AI</span>
            <span className="mt-1.5 block">= faster broken process</span>
          </p>
        </div>
        <div className="surface-glow border border-line border-t-0 p-6 md:border-t md:p-8">
          <p className="font-mono text-[11px] tracking-[0.16em] text-ember uppercase">Nova</p>
          <p className="mt-6 text-[1.45rem] leading-[1.2] tracking-[-0.03em] text-paper md:text-[1.7rem]">
            Clear process
            <span className="mt-1.5 block">+ right technology</span>
            <span className="mt-1.5 block text-ember">= leverage</span>
          </p>
        </div>
      </div>

      <ol className="mt-14 grid gap-px border border-line bg-line md:grid-cols-3">
        {reasons.map((reason, index) => (
          <li key={reason.title} className="bg-ink px-6 py-8 md:px-7">
            <p className="font-mono text-[11px] tracking-[0.16em] text-ember">0{index + 1}</p>
            <h3 className="mt-4 text-xl tracking-[-0.03em]">{reason.title}</h3>
            <p className="mt-2 max-w-xs text-[15px] leading-relaxed text-mute">{reason.body}</p>
          </li>
        ))}
      </ol>

      <div className="mt-16 border-t border-line pt-10">
        <p className="max-w-xl text-[17px] leading-relaxed text-mute">
          Built for non-technical founders, operators and early-stage teams who know what
          problem they want to solve.
        </p>
        <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 font-mono text-[11px] tracking-[0.16em] text-ember uppercase">
          {audience.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
