"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * Scales a fixed-size illustration (designed at `width` × `height`) down to fit the width
 * of its container, keeping its proportions. Never scales up past 100%.
 */
export default function FitToWidth({
  width,
  height,
  className = "",
  children,
}: {
  width: number;
  height: number;
  className?: string;
  children: ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const measure = () => setScale(Math.min(1, el.clientWidth / width));
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, [width]);

  return (
    <div ref={ref} className={className} style={{ height: height * scale }}>
      <div className="origin-top-left" style={{ width, height, transform: `scale(${scale})` }}>
        {children}
      </div>
    </div>
  );
}
