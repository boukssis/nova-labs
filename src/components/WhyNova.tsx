import { Eyebrow, Section } from "@/components/Section";
import { reasons } from "@/content/site";

export function WhyNova() {
  return (
    <Section id="why" labelledBy="why-title" className="border-t border-line">
      <div className="grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Eyebrow index="05">Why Nova</Eyebrow>
          <h2 id="why-title" className="title mt-5">
            Not another development agency.
          </h2>
          <p className="mt-6 text-[17px] leading-relaxed text-mute">
            Not a freelancer rota. Not a search for a technical co-founder. Not a large
            agency. Not a pile of AI tools. And not something you should have to figure
            out alone.
          </p>
          <a href="/#engagement" className="link mt-6 inline-block text-sm text-paper">
            How engagements are structured
          </a>
        </div>
        <ol className="lg:col-span-6 lg:col-start-7">
          {reasons.map((reason, index) => (
            <li key={reason.title} className="border-t border-line py-6 last:border-b">
              <div className="flex items-baseline gap-4">
                <span className="font-mono text-[11px] tracking-[0.16em] text-ember">
                  0{index + 1}
                </span>
                <h3 className="text-xl tracking-[-0.03em]">{reason.title}</h3>
              </div>
              <p className="mt-3 pl-9 text-[16px] leading-relaxed text-mute">{reason.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
