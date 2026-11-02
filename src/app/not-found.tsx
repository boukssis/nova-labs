import { ButtonLink } from "@/components/ButtonLink";
import { links } from "@/content/site";

export default function NotFound() {
  return (
    <main id="content" className="px-5 pt-36 pb-28 sm:px-8">
      <div className="mx-auto w-full max-w-[1180px]">
        <p className="font-mono text-[11px] tracking-[0.18em] text-ember uppercase">404</p>
        <h1 className="title mt-4 max-w-[12ch]">This page isn&apos;t part of the build.</h1>
        <p className="mt-6 max-w-md text-mute">That address doesn&apos;t exist. The rest of the site does.</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/">Back to Nova Labs</ButtonLink>
          <ButtonLink href={links.apply} variant="secondary" external>
            Start Building
          </ButtonLink>
        </div>
      </div>
    </main>
  );
}
