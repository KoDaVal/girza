"use client";

import { COLORS } from "../utils/theme";

export function GirsaLogo({ size = 44, inverse = false, animated = true }) {
  const stroke = inverse ? COLORS.neutral.white : COLORS.forest[700];
  const leaf = inverse ? COLORS.olive[300] : COLORS.olive[600];
  const gear = inverse ? COLORS.teal[300] : COLORS.teal[600];

  return (
    <svg width={size} height={size} viewBox="0 0 100 100" style={{ flexShrink: 0 }}>
      <g style={animated ? { transformOrigin: "50px 50px", animation: "rotate 25s linear infinite" } : {}}>
        <circle cx="50" cy="50" r="44" fill="none" stroke={stroke} strokeWidth="3.5" strokeDasharray="260 30" strokeLinecap="round" />
        <path d="M 86 30 L 94 22 L 89 40 Z" fill={stroke} />
      </g>
      <g style={animated ? { transformOrigin: "38px 55px", animation: "leafSway 4s ease-in-out infinite" } : {}}>
        <path d="M 32 72 C 26 60, 26 42, 38 28 C 42 24, 46 22, 46 22 C 46 22, 40 34, 38 48 C 36 58, 38 66, 42 70 C 40 72, 34 74, 32 72 Z" fill={leaf} opacity="0.95" />
        <path d="M 46 22 C 44 34, 40 48, 36 62" stroke={inverse ? "rgba(255,255,255,0.3)" : "rgba(0,0,0,0.15)"} strokeWidth="0.8" fill="none" />
      </g>
      <g style={animated ? { transformOrigin: "62px 62px", animation: "gearSpin 10s linear infinite" } : {}}>
        <circle cx="62" cy="62" r="11" fill="none" stroke={gear} strokeWidth="2.5" />
        <circle cx="62" cy="62" r="4" fill="none" stroke={gear} strokeWidth="2" />
        {[0, 45, 90, 135, 180, 225, 270, 315].map(deg => {
          const rad = (deg * Math.PI) / 180;
          const x1 = 62 + Math.cos(rad) * 11;
          const y1 = 62 + Math.sin(rad) * 11;
          const x2 = 62 + Math.cos(rad) * 15;
          const y2 = 62 + Math.sin(rad) * 15;
          return <line key={deg} x1={x1} y1={y1} x2={x2} y2={y2} stroke={gear} strokeWidth="2.5" strokeLinecap="round" />;
        })}
      </g>
    </svg>
  );
}
