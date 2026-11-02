import Image from "next/image";
import { Eyebrow, Section } from "@/components/Section";
import { links } from "@/content/site";

export function Founder() {
  return (
    <Section id="about" labelledBy="about-title" className="border-t border-line">
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <Eyebrow index="06">The founder</Eyebrow>
          <h2 id="about-title" className="title mt-5">
            Built by a founder, for founders.
          </h2>
        </div>

        <div className="lg:col-span-7">
          <div className="flex items-start gap-4 sm:gap-5">
            <div
              className="relative shrink-0 overflow-hidden rounded-[14px] border border-ember/40"
              style={{
                boxShadow: "0 0 28px rgba(37, 99, 234, 0.22)",
              }}
            >
              <Image
                src="/images/daniel-kelly.jpg"
                alt="Daniel Kelly"
                width={112}
                height={112}
                className="size-[96px] object-cover sm:size-[112px]"
              />
            </div>
            <div className="pt-1">
              <p className="text-2xl tracking-[-0.035em] text-paper sm:text-[1.7rem]">
                Daniel Kelly
              </p>
              <p className="mt-1 text-sm text-mute">Founder &amp; AI Partner</p>
              <p className="mt-1 text-sm text-mute">Manchester, United Kingdom</p>
            </div>
          </div>

          <div className="mt-8 max-w-xl space-y-4 text-[17px] leading-relaxed text-mute">
            <p>
              Daniel was building AI products before Nova Labs had a name. Early chatbots.
              Eighteen months on production systems in the UK public sector. Then three
              companies of his own.
            </p>
            <p>
              GlowUp, OneCoach and Harold each had to be shipped, sold and lived with.
              That experience shaped how Nova works today.
            </p>
            <p className="text-paper">
              You work with Daniel. The build is not handed to a team you will never meet.
            </p>
          </div>

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
    </Section>
  );
}
