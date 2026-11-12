"use client";

import { useEffect, useRef } from "react";

// شريط رفيع في أعلى الصفحة يوضح مقدار التمرير.
export default function ScrollProgress() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const p = max > 0 ? Math.min(window.scrollY / max, 1) : 0;
      ref.current?.style.setProperty("--p", String(p));
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-1" aria-hidden="true">
      <div
        ref={ref}
        className="scroll-progress h-full bg-gradient-to-l from-secondary via-[#e6c978] to-primary"
      />
    </div>
  );
}
