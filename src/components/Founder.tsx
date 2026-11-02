import Image from "next/image";
import { Eyebrow, Section } from "@/components/Section";
import { links } from "@/content/site";

export function Founder() {
  return (
    <Section id="about" labelledBy="about-title" className="border-t border-line">
      <div className="grid gap-12 lg:grid-cols-12 lg:items-end lg:gap-16">
        <div className="lg:col-span-5">
          <Eyebrow index="04">About</Eyebrow>
          <h2 id="about-title" className="title mt-5">
            Built by a founder, for founders.
          </h2>
        </div>

        <div className="lg:col-span-6 lg:col-start-7">
          <div className="flex items-center gap-4">
            <div
              className="relative shrink-0 overflow-hidden rounded-[14px] border border-ember/40"
              style={{ boxShadow: "0 0 24px rgba(37, 99, 234, 0.22)" }}
            >
              <Image
                src="/images/daniel-kelly.jpg"
                alt="Daniel Kelly"
                width={96}
                height={96}
                className="size-[88px] object-cover sm:size-[96px]"
              />
            </div>
            <div>
              <p className="text-2xl tracking-[-0.035em] text-paper">Daniel Kelly</p>
              <p className="mt-1 text-sm text-mute">Founder &amp; AI Partner</p>
              <p className="mt-0.5 text-sm text-mute">Manchester, UK</p>
            </div>
          </div>

          <p className="mt-8 max-w-md text-[17px] leading-relaxed text-mute">
            Daniel has built and shipped AI products across consumer, property and service
            businesses, alongside production systems in the UK public sector.
          </p>
          <p className="mt-4 max-w-md text-[17px] leading-relaxed text-paper">
            You work with Daniel — not a team you never meet.
          </p>

          <a
            href={links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="link mt-7 inline-flex w-fit text-sm text-paper"
          >
            LinkedIn →
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </div>
      </div>
    </Section>
  );
}
