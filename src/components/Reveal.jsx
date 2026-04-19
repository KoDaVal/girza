"use client";

import { useEffect, useRef } from "react";

export function Reveal({ children, direction = "up", delay = 0, style }) {
  const ref = useRef(null);
  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        obs.unobserve(entry.target);
      }
    }, { threshold: 0.15 });
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  const cls = direction === "left" ? "reveal-left" : direction === "right" ? "reveal-right" : "reveal";
  return <div ref={ref} className={cls} style={{ transitionDelay: `${delay}ms`, ...style }}>{children}</div>;
}
