import { Eyebrow, Section } from "@/components/Section";
import { barriers } from "@/content/site";

export function FounderProblem() {
  return (
    <Section labelledBy="gap-title" className="border-t border-line">
      <div className="grid gap-14 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-6">
          <Eyebrow index="01">The gap</Eyebrow>
          <h2 id="gap-title" className="title mt-5 text-paper">
            Great ideas shouldn&apos;t die because you&apos;re not technical.
          </h2>
          <div className="mt-6 max-w-xl space-y-4 text-[17px] leading-relaxed text-mute">
            <p>
              You know what needs to exist. You understand the customer. You can see the
              opportunity.
            </p>
            <p>The idea is not the hard part. Getting it built, properly, is.</p>
          </div>
        </div>
        <div className="lg:col-span-5 lg:col-start-8">
          <p className="font-mono text-[11px] tracking-[0.16em] text-mute uppercase">
            Turning it into a product means
          </p>
          <ul className="mt-4 border-t border-line">
            {barriers.map((item) => (
              <li
                key={item}
                className="border-b border-line py-3.5 text-[17px] tracking-[-0.02em] text-paper"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p className="mt-16 max-w-3xl text-2xl tracking-[-0.035em] text-paper md:text-[2rem] md:leading-tight">
        You focus on the business.{" "}
        <span className="text-mute">We take responsibility for the build.</span>
      </p>
    </Section>
  );
}
