import { ButtonLink } from "@/components/ButtonLink";
import { links } from "@/content/site";

export function FinalCTA() {
  return (
    <section
      aria-labelledby="close-title"
      className="relative overflow-hidden border-t border-line py-28 md:py-36 lg:py-44"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 50% 60% at 15% 40%, rgba(37,99,234,0.16), transparent 55%), radial-gradient(ellipse 40% 50% at 90% 80%, rgba(247,250,255,0.03), transparent 50%)",
        }}
      />
      <div className="relative mx-auto w-full max-w-[1180px] px-5 sm:px-8">
        <span aria-hidden className="block h-px w-12 bg-ember" />
        <h2 id="close-title" className="title mt-8 max-w-[12ch]">
          Still thinking about the idea?
        </h2>
        <p className="mt-6 max-w-xl text-2xl tracking-[-0.035em] text-paper md:text-3xl">
          Let&apos;s work out whether it&apos;s worth building.
        </p>
        <div className="mt-10">
          <ButtonLink href={links.apply} external>
            Start Building
          </ButtonLink>
        </div>
        <p className="mt-6 max-w-md text-sm leading-relaxed text-mute">
          A short application. If it&apos;s a fit, we&apos;ll talk the idea through properly.
          Manchester, United Kingdom.
        </p>
      </div>
    </section>
  );
}
