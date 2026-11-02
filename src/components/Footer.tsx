import { links, nav } from "@/content/site";
import { Wordmark } from "@/components/Wordmark";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto grid w-full max-w-[1180px] gap-12 px-5 py-16 sm:px-8 md:grid-cols-12">
        <div className="md:col-span-5">
          <a href="/" aria-label="Nova Labs, home">
            <Wordmark className="text-2xl" />
          </a>
          <p className="mt-4 max-w-xs text-mute">
            Technical AI partner for non-technical founders.
          </p>
          <p className="mt-6 font-mono text-[11px] tracking-[0.16em] text-mute uppercase">
            Manchester · United Kingdom
          </p>
        </div>
        <nav className="md:col-span-3" aria-label="Footer">
          <ul className="space-y-3">
            {nav.map((item) => (
              <li key={item.id}>
                <a href={item.href} className="link text-sm text-paper">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="md:col-span-4">
          <ul className="space-y-3 text-sm">
            <li>
              <a
                href={links.apply}
                target="_blank"
                rel="noopener noreferrer"
                className="link text-paper"
              >
                Start Building
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </li>
            <li>
              <a
                href={links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="link text-paper"
              >
                Daniel on LinkedIn
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </li>
            <li>
              <a
                href={links.company}
                target="_blank"
                rel="noopener noreferrer"
                className="link text-paper"
              >
                Nova Labs on LinkedIn
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-line">
        <div className="mx-auto flex w-full max-w-[1180px] px-5 py-5 text-sm text-mute sm:px-8">
          <p>© 2026 Nova Labs Ai Limited</p>
        </div>
      </div>
    </footer>
  );
}
