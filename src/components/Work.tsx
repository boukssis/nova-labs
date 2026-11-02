import { Arrow } from "@/components/Arrow";
import { Eyebrow, Section } from "@/components/Section";
import { products } from "@/content/site";

export function Work() {
  return (
    <Section id="work" labelledBy="work-title" className="border-t border-line">
      <div className="max-w-2xl">
        <Eyebrow index="06">The work</Eyebrow>
        <h2 id="work-title" className="title mt-5">
          Built in the real world.
        </h2>
        <p className="mt-5 text-[17px] leading-relaxed text-mute">
          Products Daniel co-founded and took from an idea into the world. Not sample
          clients. No borrowed results.
        </p>
      </div>

      <div className="mt-14 border-t border-line">
        {products.map((product, index) => (
          <article
            key={product.name}
            className="group grid gap-6 border-b border-line py-12 md:grid-cols-12 md:gap-8 md:py-16"
          >
            <div className="md:col-span-5">
              <div className="flex items-baseline justify-between gap-4">
                <p className="font-mono text-[11px] tracking-[0.16em] text-mute">
                  0{index + 1}
                </p>
                <p className="font-mono text-[10px] tracking-[0.16em] text-ember uppercase">
                  {product.kind}
                </p>
              </div>
              <h3 className="mt-4 text-[clamp(2.4rem,5vw,4.25rem)] leading-[0.9] font-medium tracking-[-0.045em] transition-transform duration-500 group-hover:translate-x-1">
                {product.name}
              </h3>
              <p className="mt-4 text-sm text-mute">{product.role}</p>
            </div>
            <div className="md:col-span-7 md:pt-8">
              <p className="text-xl tracking-[-0.03em] text-paper">{product.line}</p>
              <p className="mt-4 max-w-xl text-[17px] leading-relaxed text-mute">
                {product.body}
              </p>
              <a
                href={product.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group/link link mt-6 inline-flex items-center gap-2 text-sm text-paper"
              >
                {product.domain}
                <span className="sr-only"> (opens in a new tab)</span>
                <Arrow className="group-hover/link:translate-x-1" />
              </a>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
