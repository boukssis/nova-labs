import { BuildField } from "@/components/BuildField";
import { ButtonLink } from "@/components/ButtonLink";
import { links } from "@/content/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden px-5 pt-28 pb-16 sm:px-8 md:pt-32 lg:flex lg:min-h-[100svh] lg:items-center lg:pt-24 lg:pb-16">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 55% 70% at 78% 48%, rgba(37,99,234,0.16), transparent 58%), radial-gradient(ellipse 40% 50% at 10% 80%, rgba(247,250,255,0.03), transparent 55%)",
        }}
      />

      <div className="mx-auto grid w-full max-w-[1180px] items-center gap-10 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-6 xl:col-span-7">
          <div className="rise flex flex-wrap items-center gap-x-4 gap-y-2">
            <p className="font-mono text-[11px] font-medium tracking-[0.18em] text-mute uppercase">
              Technical AI partner for founders
            </p>
            <span aria-hidden className="hidden text-paper/30 sm:inline">
              ·
            </span>
            <p className="font-mono text-[11px] tracking-[0.18em] text-mute uppercase">
              Manchester · UK
            </p>
          </div>

          <h1 className="display rise rise-2 mt-7 text-paper">
            <span className="block">Your idea.</span>
            <span className="mt-1 block sm:mt-2">
              Built properly<span className="text-ember">.</span>
            </span>
          </h1>

          <p className="rise rise-3 mt-7 max-w-[36rem] text-[17px] leading-relaxed text-mute sm:text-lg">
            You bring the idea. We make it real. Nova Labs designs, builds and launches
            AI-powered products and systems with founders who shouldn&apos;t have to become
            the engineering department.
          </p>

          <div className="rise rise-4 mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={links.apply} external className="w-full sm:w-auto">
              Start Building
            </ButtonLink>
            <ButtonLink href="/#process" variant="secondary" className="w-full sm:w-auto">
              See how it works
            </ButtonLink>
          </div>

          <ol className="rise rise-5 mt-10 flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-[11px] tracking-[0.16em] text-mute uppercase">
            <li className="text-paper">Idea</li>
            <li aria-hidden className="text-ember">
              →
            </li>
            <li>Strategy</li>
            <li aria-hidden className="text-ember">
              →
            </li>
            <li>Build</li>
            <li aria-hidden className="text-ember">
              →
            </li>
            <li className="text-paper">Launch</li>
          </ol>
        </div>

        <div className="rise rise-3 lg:col-span-6 xl:col-span-5">
          <BuildField />
        </div>
      </div>
    </section>
  );
}
