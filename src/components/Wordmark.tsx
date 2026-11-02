export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-center gap-[0.45em] font-medium tracking-[-0.045em] text-paper ${className}`}
    >
      Nova Labs
      <span aria-hidden className="size-[0.4em] shrink-0 rounded-full bg-ember" />
    </span>
  );
}
