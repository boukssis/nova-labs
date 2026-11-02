export function FounderProblem() {
  return (
    <section aria-labelledby="gap-title" className="border-t border-line py-28 md:py-36 lg:py-44">
      <div className="mx-auto w-full max-w-[1180px] px-5 sm:px-8">
        <h2
          id="gap-title"
          className="max-w-[16ch] text-[clamp(2.4rem,5.5vw,4.75rem)] leading-[0.95] font-medium tracking-[-0.045em] text-paper"
        >
          Great ideas shouldn&apos;t die because you&apos;re not technical.
        </h2>
        <div className="mt-10 max-w-md space-y-3 text-xl tracking-[-0.025em] text-mute md:text-2xl">
          <p>You know the problem.</p>
          <p className="text-paper">Nova handles the technical side.</p>
        </div>
      </div>
    </section>
  );
}
