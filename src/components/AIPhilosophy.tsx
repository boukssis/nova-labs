import { Section } from "@/components/Section";

export function AIPhilosophy() {
  return (
    <Section labelledBy="philosophy-title" className="border-t border-line">
      <div className="max-w-4xl">
        <p className="font-mono text-[11px] tracking-[0.18em] text-ember uppercase">
          The philosophy
        </p>
        <h2 id="philosophy-title" className="title mt-5">
          <span className="block">AI where it matters.</span>
          <span className="mt-2 block text-mute">Not where it looks impressive.</span>
        </h2>
        <p className="mt-8 max-w-xl text-[17px] leading-relaxed text-mute">
          The goal is not to automate everything. The goal is to find the points where
          technology actually improves the business. Understand the process first. Then
          decide whether AI belongs in it.
        </p>
      </div>

      <div className="mt-14 grid md:grid-cols-2">
        <div className="border border-line p-6 md:border-r-0 md:p-10">
          <p className="font-mono text-[11px] tracking-[0.16em] text-mute uppercase">
            The usual move
          </p>
          <p className="mt-8 text-[1.7rem] leading-[1.15] tracking-[-0.035em] text-mute md:text-3xl">
            Broken process
            <span className="mt-2 block text-paper/70">+ AI</span>
            <span className="mt-2 block">= a faster broken process</span>
          </p>
        </div>
        <div className="surface-glow border border-line border-t-0 p-6 md:border-t md:p-10">
          <p className="font-mono text-[11px] tracking-[0.16em] text-ember uppercase">
            The Nova way
          </p>
          <p className="mt-8 text-[1.7rem] leading-[1.15] tracking-[-0.035em] text-paper md:text-3xl">
            A clear process
            <span className="mt-2 block">+ the right technology</span>
            <span className="mt-2 block text-ember">= leverage</span>
          </p>
        </div>
      </div>
    </Section>
  );
}
