"use client";

import { COLORS } from "../utils/theme";

export function HeroBackground() {
  return (
    <div style={{ position: "absolute", inset: 0, overflow: "hidden", zIndex: 1 }}>
      <div style={{
        position: "absolute", inset: 0,
        background: `linear-gradient(135deg, ${COLORS.forest[900]} 0%, ${COLORS.forest[800]} 25%, ${COLORS.teal[900]} 75%, ${COLORS.forest[900]} 100%)`,
        backgroundSize: "300% 300%",
        animation: "gradientShift 15s ease infinite",
      }} />

      <div style={{
        position: "absolute", top: "-10%", left: "-5%", width: 600, height: 600, borderRadius: "50%",
        background: `radial-gradient(circle, ${COLORS.olive[600]}55 0%, transparent 70%)`,
        filter: "blur(60px)", animation: "blob1 20s ease-in-out infinite",
      }} />
      <div style={{
        position: "absolute", bottom: "-15%", right: "-10%", width: 700, height: 700, borderRadius: "50%",
        background: `radial-gradient(circle, ${COLORS.teal[500]}50 0%, transparent 70%)`,
        filter: "blur(80px)", animation: "blob2 25s ease-in-out infinite",
      }} />
      <div style={{
        position: "absolute", top: "40%", right: "20%", width: 400, height: 400, borderRadius: "50%",
        background: `radial-gradient(circle, ${COLORS.olive[400]}40 0%, transparent 70%)`,
        filter: "blur(50px)", animation: "blob3 18s ease-in-out infinite",
      }} />

      <svg style={{ position: "absolute", top: "50%", right: "8%", width: 500, height: 500, transform: "translateY(-50%)", opacity: 0.12 }} viewBox="0 0 500 500">
        <g style={{ transformOrigin: "250px 250px", animation: "rotate 60s linear infinite" }}>
          <circle cx="250" cy="250" r="240" fill="none" stroke={COLORS.neutral.white} strokeWidth="1" strokeDasharray="3 8" />
          <circle cx="250" cy="250" r="200" fill="none" stroke={COLORS.neutral.white} strokeWidth="0.8" />
          <circle cx="250" cy="10" r="4" fill={COLORS.olive[300]} />
          <circle cx="490" cy="250" r="3" fill={COLORS.teal[300]} />
          <circle cx="250" cy="490" r="5" fill={COLORS.olive[400]} />
        </g>
        <g style={{ transformOrigin: "250px 250px", animation: "rotateReverse 45s linear infinite" }}>
          <circle cx="250" cy="250" r="160" fill="none" stroke={COLORS.neutral.white} strokeWidth="0.8" strokeDasharray="2 6" />
          <circle cx="250" cy="90" r="3" fill={COLORS.teal[200]} />
          <circle cx="410" cy="250" r="4" fill={COLORS.olive[200]} />
        </g>
        <g style={{ transformOrigin: "250px 250px", animation: "rotate 30s linear infinite" }}>
          <circle cx="250" cy="250" r="120" fill="none" stroke={COLORS.neutral.white} strokeWidth="0.6" />
          <circle cx="250" cy="130" r="2.5" fill={COLORS.olive[300]} />
        </g>
      </svg>

      <svg style={{ position: "absolute", top: "15%", left: "5%", width: 300, height: 300, opacity: 0.08 }} viewBox="0 0 300 300">
        <g style={{ transformOrigin: "150px 150px", animation: "rotateReverse 40s linear infinite" }}>
          <circle cx="150" cy="150" r="140" fill="none" stroke={COLORS.neutral.white} strokeWidth="1" />
          <circle cx="150" cy="150" r="100" fill="none" stroke={COLORS.neutral.white} strokeWidth="0.6" strokeDasharray="4 8" />
        </g>
      </svg>

      {[...Array(18)].map((_, i) => {
        const size = 6 + (i % 4) * 3;
        const left = (i * 7 + 5) % 100;
        const duration = 15 + (i % 5) * 3;
        const delay = i * 1.2;
        const colors = [COLORS.olive[300], COLORS.teal[300], COLORS.olive[400], COLORS.forest[200]];
        return (
          <div key={i} style={{
            position: "absolute", left: `${left}%`, bottom: "-50px",
            width: size, height: size, borderRadius: "50%",
            background: colors[i % 4], opacity: 0.6,
            animation: `particleFloat ${duration}s linear infinite`,
            animationDelay: `${delay}s`,
          }} />
        );
      })}

      <div style={{
        position: "absolute", inset: 0,
        background: "radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.3) 100%)",
        pointerEvents: "none",
      }} />
    </div>
  );
}
