"use client";

import { useEffect, useRef } from "react";

type Side = "left" | "right" | "bottom";

type NodeSpec = {
  id: string;
  x: number;
  y: number;
  r: number;
  delay: number;
  label?: string;
  side?: Side;
  core?: boolean;
};

const NODES: NodeSpec[] = [
  { id: "idea", x: 0.38, y: 0.5, r: 5.5, delay: 0.05, label: "IDEA", side: "left", core: true },
  { id: "a", x: 0.2, y: 0.3, r: 2.7, delay: 0.55 },
  { id: "b", x: 0.56, y: 0.26, r: 3, delay: 0.72 },
  { id: "c", x: 0.16, y: 0.6, r: 2.5, delay: 0.88 },
  { id: "d", x: 0.58, y: 0.48, r: 3.2, delay: 1.08, label: "SYSTEM", side: "right" },
  { id: "e", x: 0.34, y: 0.72, r: 2.5, delay: 1.28 },
  { id: "f", x: 0.48, y: 0.36, r: 2.1, delay: 1.4 },
  { id: "g", x: 0.76, y: 0.36, r: 2.4, delay: 1.62 },
  { id: "h", x: 0.72, y: 0.62, r: 3.2, delay: 1.9 },
  { id: "product", x: 0.8, y: 0.78, r: 4.2, delay: 2.1, label: "PRODUCT", side: "bottom" },
];

const EDGES: { a: string; b: string; delay: number }[] = [
  { a: "idea", b: "a", delay: 0.62 },
  { a: "idea", b: "b", delay: 0.78 },
  { a: "idea", b: "c", delay: 0.94 },
  { a: "idea", b: "d", delay: 1.12 },
  { a: "a", b: "c", delay: 1.16 },
  { a: "b", b: "f", delay: 1.42 },
  { a: "idea", b: "e", delay: 1.32 },
  { a: "f", b: "d", delay: 1.55 },
  { a: "d", b: "g", delay: 1.68 },
  { a: "d", b: "h", delay: 1.95 },
  { a: "e", b: "h", delay: 2.02 },
  { a: "h", b: "product", delay: 2.18 },
  { a: "g", b: "product", delay: 2.28 },
  { a: "c", b: "e", delay: 1.48 },
];

const PHASES = [
  { at: 0, label: "IDEA" },
  { at: 0.55, label: "STRUCTURE" },
  { at: 1.15, label: "SYSTEM" },
  { at: 2.05, label: "PRODUCT" },
  { at: 2.75, label: "LAUNCH" },
];

function easeOut(value: number) {
  return 1 - (1 - value) ** 3;
}

function clamp01(value: number) {
  return Math.max(0, Math.min(1, value));
}

export function BuildField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const statusRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const status = statusRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const pointer = { x: 0.5, y: 0.5, active: false };
    const current = NODES.map((node) => ({ x: node.x, y: node.y }));
    const indexById = new Map(NODES.map((node, index) => [node.id, index]));
    let start = 0;
    let running = true;
    let visible = true;
    let queued = false;
    let frame = 0;
    let phaseLabel = "";

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const { width, height } = canvas.getBoundingClientRect();
      canvas.width = Math.max(1, Math.round(width * dpr));
      canvas.height = Math.max(1, Math.round(height * dpr));
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const draw = (now: number) => {
      if (!start) start = now;
      const elapsed = reduce ? 10 : (now - start) / 1000;
      const rect = canvas.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;
      context.clearRect(0, 0, width, height);

      const scale = Math.max(0.82, Math.min(width, height) / 380);

      NODES.forEach((node, index) => {
        let offsetX = 0;
        let offsetY = 0;
        if (!reduce && pointer.active) {
          const dx = pointer.x - node.x;
          const dy = pointer.y - node.y;
          const pull = Math.max(0, 1 - Math.hypot(dx, dy) / 0.55);
          offsetX = dx * pull * 0.04;
          offsetY = dy * pull * 0.04;
        }
        const nextX = node.x + offsetX;
        const nextY = node.y + offsetY;
        const ease = reduce ? 1 : 0.08;
        current[index].x += (nextX - current[index].x) * ease;
        current[index].y += (nextY - current[index].y) * ease;
      });

      const point = (id: string) => {
        const index = indexById.get(id);
        if (index === undefined) return { x: 0, y: 0 };
        return { x: current[index].x * width, y: current[index].y * height };
      };

      context.lineWidth = 1;
      context.strokeStyle = "rgba(247, 246, 242, 0.28)";
      context.lineCap = "round";
      for (const edge of EDGES) {
        const progress = easeOut(clamp01((elapsed - edge.delay) / 0.5));
        if (progress <= 0) continue;
        const from = point(edge.a);
        const to = point(edge.b);
        context.beginPath();
        context.moveTo(from.x, from.y);
        context.lineTo(from.x + (to.x - from.x) * progress, from.y + (to.y - from.y) * progress);
        context.stroke();
      }

      const frameProgress = easeOut(clamp01((elapsed - 2.55) / 0.6));
      if (frameProgress > 0) {
        context.save();
        context.globalAlpha = frameProgress;
        context.strokeStyle = "rgba(255, 77, 26, 0.9)";
        context.lineWidth = 1;
        context.beginPath();
        context.roundRect(width * 0.62, height * 0.5, width * 0.31, height * 0.4, 8);
        context.stroke();
        context.restore();
      }

      const mono =
        getComputedStyle(document.documentElement).getPropertyValue("--font-geist-mono").trim() ||
        "ui-monospace, monospace";
      context.font = `500 ${Math.round(11 * scale)}px ${mono}`;
      context.letterSpacing = "0.14em";

      for (const node of NODES) {
        const appear = easeOut(clamp01((elapsed - node.delay) / 0.35));
        if (appear <= 0) continue;
        const index = indexById.get(node.id);
        if (index === undefined) continue;
        const x = current[index].x * width;
        const y = current[index].y * height;
        context.save();
        context.globalAlpha = appear;

        if (node.core) {
          const glow = context.createRadialGradient(x, y, 0, x, y, 34 * scale);
          glow.addColorStop(0, "rgba(255, 77, 26, 0.55)");
          glow.addColorStop(1, "rgba(255, 77, 26, 0)");
          context.fillStyle = glow;
          context.beginPath();
          context.arc(x, y, 34 * scale, 0, Math.PI * 2);
          context.fill();
          context.fillStyle = "#FF4D1A";
        } else {
          context.fillStyle = "#F7F6F2";
        }

        context.beginPath();
        context.arc(x, y, node.r * scale * (0.55 + 0.45 * appear), 0, Math.PI * 2);
        context.fill();

        if (node.label && node.side) {
          context.fillStyle = node.core ? "#FF4D1A" : "rgba(247, 246, 242, 0.78)";
          context.textBaseline = "middle";
          if (node.side === "left") {
            context.textAlign = "right";
            context.fillText(node.label, x - 12 * scale, y);
          } else if (node.side === "right") {
            context.textAlign = "left";
            context.fillText(node.label, x + 12 * scale, y);
          } else {
            context.textAlign = "center";
            context.fillText(node.label, x, y + 18 * scale);
          }
        }
        context.restore();
      }

      const nextPhase =
        [...PHASES].reverse().find((phase) => elapsed >= phase.at)?.label ?? "IDEA";
      if (status && nextPhase !== phaseLabel) {
        phaseLabel = nextPhase;
        status.textContent = nextPhase;
      }

      return elapsed;
    };

    const shouldContinue = (elapsed: number) => {
      if (reduce) return false;
      if (pointer.active) return true;
      if (elapsed < 3.6) return true;
      return NODES.some((node, index) => {
        return Math.hypot(current[index].x - node.x, current[index].y - node.y) > 0.0015;
      });
    };

    const requestDraw = () => {
      if (!running || !visible || queued) return;
      queued = true;
      frame = window.requestAnimationFrame((now) => {
        queued = false;
        const elapsed = draw(now);
        if (shouldContinue(elapsed)) requestDraw();
      });
    };

    const onMove = (event: PointerEvent) => {
      if (reduce || event.pointerType !== "mouse") return;
      const rect = canvas.getBoundingClientRect();
      pointer.x = (event.clientX - rect.left) / rect.width;
      pointer.y = (event.clientY - rect.top) / rect.height;
      pointer.active = true;
      requestDraw();
    };

    const onLeave = () => {
      pointer.active = false;
      requestDraw();
    };

    const resizeObserver = new ResizeObserver(() => {
      resize();
      requestDraw();
    });
    const intersection = new IntersectionObserver(
      ([entry]) => {
        visible = entry?.isIntersecting ?? false;
        if (visible) requestDraw();
      },
      { threshold: 0.05 },
    );

    resize();
    resizeObserver.observe(canvas);
    intersection.observe(canvas);
    canvas.addEventListener("pointermove", onMove);
    canvas.addEventListener("pointerleave", onLeave);
    requestDraw();

    return () => {
      running = false;
      window.cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      intersection.disconnect();
      canvas.removeEventListener("pointermove", onMove);
      canvas.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <figure className="relative">
      <div className="relative overflow-hidden border border-line/80 bg-ink-2/80">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 55% 50% at 42% 48%, rgba(255,77,26,0.14), transparent 62%)",
          }}
        />
        <div className="relative flex items-center justify-between border-b border-line/80 px-3.5 py-2.5">
          <span className="font-mono text-[10px] tracking-[0.18em] text-mute uppercase">
            Build sequence
          </span>
          <span
            ref={statusRef}
            className="font-mono text-[10px] tracking-[0.18em] text-ember uppercase"
          >
            Idea
          </span>
        </div>
        <canvas
          ref={canvasRef}
          className="relative block h-[280px] w-full sm:h-[340px] lg:h-[min(52svh,480px)]"
          aria-hidden
        />
        <span
          aria-hidden
          className="pointer-events-none absolute top-[46px] left-2.5 size-3 border-t border-l border-ember/80"
        />
        <span
          aria-hidden
          className="pointer-events-none absolute top-[46px] right-2.5 size-3 border-t border-r border-white/20"
        />
        <span
          aria-hidden
          className="pointer-events-none absolute bottom-2.5 left-2.5 size-3 border-b border-l border-white/20"
        />
        <span
          aria-hidden
          className="pointer-events-none absolute right-2.5 bottom-2.5 size-3 border-r border-b border-white/20"
        />
      </div>
      <figcaption className="mt-3 flex items-center justify-between gap-4 font-mono text-[10px] tracking-[0.16em] text-mute uppercase">
        <span>One point, becoming a product</span>
        <span className="hidden sm:inline">Idea → launch</span>
      </figcaption>
    </figure>
  );
}
