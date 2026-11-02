import Image from "next/image";

export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 text-paper ${className}`}>
      <Image
        src="/images/nova-labs-logo.jpg"
        alt=""
        width={28}
        height={28}
        className="size-7 rounded-[6px]"
        priority
      />
      <span className="font-medium tracking-[-0.045em]">Nova Labs</span>
    </span>
  );
}
