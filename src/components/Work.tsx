import { Arrow } from "@/components/Arrow";
import { Eyebrow, Section } from "@/components/Section";
import { products } from "@/content/site";

export function Work() {
  return (
    <Section id="work" labelledBy="work-title" className="border-t border-line">
      <div className="max-w-2xl">
        <Eyebrow index="03">The work</Eyebrow>
        <h2 id="work-title" className="title mt-5">
          Built in the real world.
        </h2>
        <p className="mt-5 text-[17px] leading-relaxed text-mute">
          Products Daniel co-founded and took from an idea into the world. Not sample
          clients. No borrowed results.
        </p>
      </div>

      <div className="mt-14 space-y-6">
        {products.map((product, index) => (
          <article
            key={product.name}
            className="group grid overflow-hidden border border-line bg-ink-2/60 transition-colors duration-300 hover:border-ember/35 md:grid-cols-12"
          >
            <div className="relative flex flex-col justify-between border-b border-line p-6 md:col-span-5 md:border-r md:border-b-0 md:p-8">
              <div>
                <div className="flex items-center justify-between gap-3">
                  <p className="font-mono text-[11px] tracking-[0.16em] text-mute">
                    0{index + 1}
                  </p>
                  <p className="font-mono text-[10px] tracking-[0.16em] text-ember uppercase">
                    {product.kind}
                  </p>
                </div>
                <h3 className="mt-6 text-[clamp(2.2rem,4.5vw,3.5rem)] leading-[0.92] font-medium tracking-[-0.045em] transition-transform duration-500 group-hover:translate-x-1">
                  {product.name}
                </h3>
                <p className="mt-4 text-sm text-mute">{product.role}</p>
              </div>
              <div
                aria-hidden
                className="mt-10 hidden h-24 border border-line/80 bg-ink md:block"
                style={{
                  backgroundImage:
                    "linear-gradient(135deg, rgba(37,99,234,0.18), transparent 55%), linear-gradient(#0b1728, #07111f)",
                }}
              >
                <div className="flex h-7 items-center gap-1.5 border-b border-line/80 px-3">
                  <span className="size-1.5 rounded-full bg-mute/50" />
                  <span className="size-1.5 rounded-full bg-mute/50" />
                  <span className="size-1.5 rounded-full bg-mute/50" />
                  <span className="ml-3 font-mono text-[9px] tracking-[0.14em] text-mute uppercase">
                    {product.domain}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center p-6 md:col-span-7 md:p-10">
              <p className="text-xl tracking-[-0.03em] text-paper">{product.line}</p>
              <p className="mt-4 max-w-xl text-[17px] leading-relaxed text-mute">
                {product.body}
              </p>
              <a
                href={product.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group/link link mt-7 inline-flex w-fit items-center gap-2 text-sm text-paper"
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
