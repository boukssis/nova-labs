import { Section } from "@/components/Section";
import { fits, notAFit } from "@/content/site";

export function IdealClients() {
  return (
    <Section labelledBy="fit-title" className="border-t border-line">
      <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
        <div>
          <h2 id="fit-title" className="title">
            Nova works best with
          </h2>
          <ul className="mt-8 border-t border-line">
            {fits.map((fit) => (
              <li key={fit.title} className="border-b border-line py-5">
                <h3 className="text-lg tracking-[-0.02em]">{fit.title}</h3>
                <p className="mt-1.5 text-mute">{fit.body}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:pt-3">
          <h3 className="text-[clamp(1.8rem,3vw,2.5rem)] leading-[1.05] font-medium tracking-[-0.04em]">
            Probably not a fit if
          </h3>
          <ul className="mt-8 border-t border-ember/40">
            {notAFit.map((item) => (
              <li
                key={item}
                className="border-b border-line py-5 text-[17px] leading-snug text-paper"
              >
                <span className="mr-3 font-mono text-ember" aria-hidden>
                  —
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
