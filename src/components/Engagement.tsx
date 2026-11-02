import { ButtonLink } from "@/components/ButtonLink";
import { Section } from "@/components/Section";
import { engagementModels, links } from "@/content/site";

export function Engagement() {
  return (
    <Section id="engagement" labelledBy="engagement-title" className="border-t border-line">
      <div className="grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="font-mono text-[11px] tracking-[0.18em] text-mute uppercase">
            Engagement
          </p>
          <h2 id="engagement-title" className="title mt-5">
            Built around your stage.
          </h2>
          <p className="mt-6 text-[17px] leading-relaxed text-mute">
            Every company is at a different point. Engagements are structured around the
            product, the opportunity and the founder — not a fixed price sheet. Equity is
            for when the fit justifies it, not a default offer.
          </p>
          <div className="mt-8">
            <ButtonLink href={links.apply} external>
              Talk through your idea
            </ButtonLink>
          </div>
        </div>
        <ul className="border-t border-line lg:col-span-6 lg:col-start-7">
          {engagementModels.map((model) => (
            <li
              key={model.title}
              className="grid gap-2 border-b border-line py-6 md:grid-cols-5 md:items-baseline md:gap-6"
            >
              <h3 className="text-2xl tracking-[-0.03em] md:col-span-2">{model.title}</h3>
              <p className="text-mute md:col-span-3">{model.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
