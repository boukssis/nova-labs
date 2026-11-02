import { Arrow } from "@/components/Arrow";
import { Eyebrow, Section } from "@/components/Section";
import { products } from "@/content/site";

export function Work() {
  return (
    <Section id="work" labelledBy="work-title" className="border-t border-line">
      <div className="max-w-xl">
        <Eyebrow index="02">Work</Eyebrow>
        <h2 id="work-title" className="title mt-5">
          Built in the real world.
        </h2>
      </div>

      <div className="mt-16 grid gap-5 lg:grid-cols-3">
        {products.map((product, index) => (
          <article
            key={product.name}
            className="group flex flex-col overflow-hidden border border-line bg-ink-2/50 transition-colors duration-300 hover:border-ember/40"
          >
            <div
              aria-hidden
              className="relative h-40 border-b border-line sm:h-48"
              style={{
                backgroundImage: `linear-gradient(145deg, rgba(37,99,234,${0.22 - index * 0.04}), transparent 55%), linear-gradient(#0b1728, #07111f)`,
              }}
            >
              <div className="absolute inset-x-4 top-4 bottom-0 overflow-hidden rounded-t-md border border-b-0 border-line/80 bg-ink">
                <div className="flex h-7 items-center gap-1.5 border-b border-line/70 px-3">
                  <span className="size-1.5 rounded-full bg-mute/45" />
                  <span className="size-1.5 rounded-full bg-mute/45" />
                  <span className="size-1.5 rounded-full bg-mute/45" />
                  <span className="ml-2 truncate font-mono text-[9px] tracking-[0.12em] text-mute uppercase">
                    {product.domain}
                  </span>
                </div>
                <div className="grid h-[calc(100%-1.75rem)] grid-cols-3 gap-2 p-3 opacity-70">
                  <div className="rounded-sm bg-ember/25" />
                  <div className="col-span-2 rounded-sm bg-paper/5" />
                  <div className="col-span-2 rounded-sm bg-paper/5" />
                  <div className="rounded-sm bg-ember/15" />
                </div>
              </div>
            </div>

            <div className="flex flex-1 flex-col p-6">
              <p className="font-mono text-[10px] tracking-[0.16em] text-ember uppercase">
                {product.kind}
              </p>
              <h3 className="mt-3 text-[2rem] leading-none font-medium tracking-[-0.04em] transition-transform duration-500 group-hover:translate-x-1">
                {product.name}
              </h3>
              <p className="mt-4 max-w-sm flex-1 text-[16px] leading-relaxed text-mute">
                {product.line}
              </p>
              <a
                href={product.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group/link link mt-6 inline-flex w-fit items-center gap-2 text-sm text-paper"
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
