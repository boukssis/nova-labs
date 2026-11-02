import { Eyebrow, Section } from "@/components/Section";
import { links, products } from "@/content/site";

export function Founder() {
  return (
    <Section id="about" labelledBy="about-title" className="border-t border-line">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <Eyebrow index="05">The founder</Eyebrow>
          <h2 id="about-title" className="title mt-5">
            Built by a founder, for founders.
          </h2>

          <div className="relative mt-10 overflow-hidden border border-line bg-ink-2">
            <div
              aria-hidden
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse 70% 80% at 30% 20%, rgba(255,77,26,0.18), transparent 55%), linear-gradient(160deg, #101014 0%, #070708 100%)",
              }}
            />
            <div className="relative flex aspect-[4/5] flex-col justify-between p-6 sm:p-8">
              <div className="flex items-start justify-between">
                <p className="font-mono text-[11px] tracking-[0.18em] text-mute uppercase">
                  Founder · Manchester
                </p>
                <span aria-hidden className="size-2 rounded-full bg-ember" />
              </div>
              <div>
                <p
                  aria-hidden
                  className="text-[clamp(5rem,14vw,7.5rem)] leading-none font-medium tracking-[-0.06em] text-paper/90"
                >
                  DK
                </p>
                <p className="mt-4 text-2xl tracking-[-0.035em] text-paper">Daniel Kelly</p>
                <p className="mt-1 text-sm text-mute">Founder &amp; AI Partner</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center lg:col-span-7 lg:pt-10">
          <div className="max-w-xl space-y-5 text-[17px] leading-relaxed text-mute">
            <p>
              Daniel was building AI products before Nova Labs had a name. Early chatbots.
              Eighteen months on production systems in the UK public sector. Then three
              companies of his own.
            </p>
            <p>
              GlowUp, OneCoach and Harold each had to be shipped, sold and lived with.
              That experience — building, iterating, and owning the outcome — shaped how
              Nova works today.
            </p>
            <p className="text-paper">
              You work with Daniel. The build is not handed to a team you will never meet.
            </p>
          </div>

          <p className="mt-8 max-w-md text-sm leading-relaxed text-mute">
            Currently co-founder and CTO at Harold, and co-founder of OneCoach and GlowUp.
          </p>

          <a
            href={links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="link mt-6 inline-flex w-fit text-sm text-paper"
          >
            Daniel on LinkedIn
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </div>
      </div>

      <ul className="mt-16 grid border-t border-line sm:grid-cols-3">
        {products.map((product, index) => (
          <li
            key={product.name}
            className={`border-b border-line py-6 sm:border-b-0 sm:py-8 ${
              index > 0 ? "sm:border-l sm:pl-6" : ""
            } ${index < products.length - 1 ? "sm:pr-6" : ""}`}
          >
            <p className="font-mono text-[11px] tracking-[0.16em] text-ember">0{index + 1}</p>
            <p className="mt-3 text-2xl tracking-[-0.04em]">{product.name}</p>
            <p className="mt-2 text-sm leading-relaxed text-mute">{product.line}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
