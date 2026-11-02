import { Eyebrow, Section } from "@/components/Section";
import { capabilities } from "@/content/site";

export function Capabilities() {
  return (
    <Section id="build" labelledBy="build-title" className="border-t border-line">
      <div className="max-w-2xl">
        <Eyebrow index="02">What we build</Eyebrow>
        <h2 id="build-title" className="title mt-5">
          What we build.
        </h2>
        <p className="mt-5 text-[17px] leading-relaxed text-mute">
          Not a menu of AI features. The things a founder actually needs in the world.
        </p>
      </div>
      <div className="mt-14 border-t border-line">
        {capabilities.map((item, index) => (
          <article
            key={item.title}
            className="group grid gap-3 border-b border-line py-8 transition-colors duration-300 md:grid-cols-12 md:gap-8 md:py-10"
          >
            <div className="md:col-span-5">
              <p className="font-mono text-[11px] tracking-[0.16em] text-mute">
                0{index + 1}
              </p>
              <h3 className="mt-3 text-[1.7rem] tracking-[-0.035em] text-paper transition-transform duration-300 group-hover:translate-x-1 md:text-[2rem]">
                {item.title}
              </h3>
            </div>
            <p className="max-w-xl text-[17px] leading-relaxed text-mute md:col-span-7 md:pt-8">
              {item.body}
            </p>
          </article>
        ))}
      </div>
    </Section>
  );
}
