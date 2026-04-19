import { useState, useEffect, useRef } from "react";

const COLORS = {
  forest: { 900: "#1B3C2D", 800: "#1F4535", 700: "#264D3A", 600: "#2D5E45", 500: "#3A7A59", 400: "#5A9E7A", 300: "#72B58E", 200: "#8DC4A3", 100: "#B3D9C0", 50: "#D0EADB" },
  olive: { 900: "#3D4A1E", 700: "#566A2B", 600: "#6E8838", 500: "#889E4C", 400: "#A4B86E", 300: "#B8CA8A", 200: "#C5D49E", 50: "#E8EFD4" },
  teal: { 900: "#1C4A55", 700: "#2A6575", 600: "#3D8494", 500: "#5199A8", 400: "#72B3C0", 300: "#8BC0CB", 200: "#A3D2DB", 50: "#DBF0F4" },
  accent: { main: "#C4742B", light: "#E8923A", bg: "#FBE8CF" },
  neutral: { 900: "#1A1A1A", 700: "#333333", 500: "#4A4A4A", 300: "#999999", 100: "#E8E8E4", 50: "#F5F5F0", white: "#FFFFFF" }
};

const fonts = {
  heading: "'Playfair Display', Georgia, serif",
  body: "'Plus Jakarta Sans', 'Segoe UI', sans-serif"
};

const globalCSS = `
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap');

* { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; }
body { font-family: 'Plus Jakarta Sans', sans-serif; }

@keyframes fadeUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }

@keyframes blob1 {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(40px, -50px) scale(1.1); }
  66% { transform: translate(-30px, 30px) scale(0.95); }
}
@keyframes blob2 {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(-40px, 30px) scale(1.05); }
  66% { transform: translate(30px, -40px) scale(0.9); }
}
@keyframes blob3 {
  0%, 100% { transform: translate(0, 0) scale(1); }
  50% { transform: translate(-20px, -30px) scale(1.15); }
}

@keyframes gradientShift {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

@keyframes rotate { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
@keyframes rotateReverse { from { transform: rotate(360deg); } to { transform: rotate(0deg); } }

@keyframes pulse {
  0%, 100% { opacity: 0.4; transform: scaleY(1); }
  50% { opacity: 0.8; transform: scaleY(1.1); }
}

@keyframes particleFloat {
  0% { transform: translateY(100vh) translateX(0) rotate(0deg); opacity: 0; }
  10% { opacity: 0.6; }
  90% { opacity: 0.6; }
  100% { transform: translateY(-100vh) translateX(50px) rotate(720deg); opacity: 0; }
}

@keyframes leafSway {
  0%, 100% { transform: rotate(-3deg); }
  50% { transform: rotate(3deg); }
}

@keyframes gearSpin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.reveal { opacity: 0; transform: translateY(40px); transition: opacity 0.9s cubic-bezier(0.16, 1, 0.3, 1), transform 0.9s cubic-bezier(0.16, 1, 0.3, 1); }
.reveal.visible { opacity: 1; transform: translateY(0); }

.reveal-left { opacity: 0; transform: translateX(-40px); transition: opacity 1s cubic-bezier(0.16, 1, 0.3, 1), transform 1s cubic-bezier(0.16, 1, 0.3, 1); }
.reveal-left.visible { opacity: 1; transform: translateX(0); }

.reveal-right { opacity: 0; transform: translateX(40px); transition: opacity 1s cubic-bezier(0.16, 1, 0.3, 1), transform 1s cubic-bezier(0.16, 1, 0.3, 1); }
.reveal-right.visible { opacity: 1; transform: translateX(0); }

.hover-lift { transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.5s ease, border-color 0.5s ease; }
.hover-lift:hover { transform: translateY(-8px); box-shadow: 0 24px 48px -16px rgba(27, 60, 45, 0.18); }

.btn-fx { transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1); position: relative; overflow: hidden; }
.btn-fx::before { content: ''; position: absolute; top: 0; left: -100%; width: 100%; height: 100%; background: linear-gradient(90deg, transparent, rgba(255,255,255,0.25), transparent); transition: left 0.7s ease; }
.btn-fx:hover::before { left: 100%; }
.btn-fx:hover { transform: translateY(-3px); box-shadow: 0 16px 32px -10px rgba(27, 60, 45, 0.4); }

.nav-link { position: relative; transition: color 0.3s ease; }
.nav-link::after { content: ''; position: absolute; bottom: 2px; left: 50%; width: 0; height: 2px; background: currentColor; transition: width 0.4s ease; transform: translateX(-50%); border-radius: 2px; }
.nav-link:hover::after, .nav-link.active::after { width: 60%; }

.fade-up-1 { opacity: 0; animation: fadeUp 1s cubic-bezier(0.16,1,0.3,1) 0.2s forwards; }
.fade-up-2 { opacity: 0; animation: fadeUp 1.1s cubic-bezier(0.16,1,0.3,1) 0.4s forwards; }
.fade-up-3 { opacity: 0; animation: fadeUp 1.2s cubic-bezier(0.16,1,0.3,1) 0.6s forwards; }
.fade-up-4 { opacity: 0; animation: fadeUp 1.3s cubic-bezier(0.16,1,0.3,1) 0.8s forwards; }
.fade-up-5 { opacity: 0; animation: fadeIn 1.5s ease 1.4s forwards; }

input:focus, textarea:focus, select:focus { border-color: ${COLORS.forest[400]} !important; }

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; }
}
`;

// ═══════════════════════════════════════════
// ANIMATED GIRSA LOGO
// ═══════════════════════════════════════════
function GirsaLogo({ size = 44, inverse = false, animated = true }) {
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

// ═══════════════════════════════════════════
// ICONS
// ═══════════════════════════════════════════
const icons = {
  recycle: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 19H4.815a1.83 1.83 0 01-1.57-.881 1.785 1.785 0 01-.004-1.784L7.196 9.5"/><path d="M11 19h8.203a1.83 1.83 0 001.556-.89 1.784 1.784 0 00-.009-1.78l-3.96-6.83"/><path d="M14 16l3 3 3-3"/><path d="M8.293 13.596L4.875 7.97a1.83 1.83 0 01.009-1.784A1.784 1.784 0 016.441 5.3h7.96"/><path d="M7 20l-3-3 3-3"/><path d="M12 8l2-4-4-1"/></svg>,
  leaf: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 20A7 7 0 019.8 6.9C15.5 4.9 20 7 20 7s.7 9.4-7.8 12.5"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>,
  book: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 016.5 2H20v20H6.5a2.5 2.5 0 010-5H20"/></svg>,
  chart: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3"/></svg>,
  shield: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/><path d="M9 12l2 2 4-4"/></svg>,
  mail: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="M22 7l-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7"/></svg>,
  phone: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>,
  mapPin: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0116 0z"/><circle cx="12" cy="10" r="3"/></svg>,
  arrowRight: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>,
  globe: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 000 20 14.5 14.5 0 000-20M2 12h20"/></svg>,
  heart: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0016.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 002 8.5c0 2.3 1.5 4.05 3 5.5l7 7z"/></svg>,
  image: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><circle cx="9" cy="9" r="2"/><path d="M21 15l-3.086-3.086a2 2 0 00-2.828 0L6 21"/></svg>,
  file: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V7z"/><path d="M14 2v4a2 2 0 002 2h4"/></svg>,
  whatsapp: <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>,
};

// ═══════════════════════════════════════════
// STYLES
// ═══════════════════════════════════════════
const s = {
  page: { fontFamily: fonts.body, color: COLORS.neutral[900], background: COLORS.neutral.white, minHeight: "100vh", overflowX: "hidden" },
  container: { maxWidth: 1240, margin: "0 auto", padding: "0 24px" },
  h1: { fontFamily: fonts.heading, fontSize: 56, fontWeight: 700, lineHeight: 1.05, color: COLORS.forest[900], margin: 0, letterSpacing: "-0.02em" },
  h2: { fontFamily: fonts.heading, fontSize: 42, fontWeight: 700, lineHeight: 1.1, color: COLORS.forest[900], margin: 0, letterSpacing: "-0.01em" },
  h3: { fontFamily: fonts.heading, fontSize: 26, fontWeight: 600, lineHeight: 1.25, color: COLORS.forest[900], margin: 0 },
  body: { fontSize: 16, lineHeight: 1.75, color: COLORS.neutral[500], margin: 0 },
  label: { fontSize: 12, fontWeight: 700, letterSpacing: 2.5, textTransform: "uppercase", color: COLORS.olive[600] },
  btn: { display: "inline-flex", alignItems: "center", gap: 10, padding: "16px 32px", borderRadius: 999, border: "none", cursor: "pointer", fontSize: 15, fontWeight: 600, fontFamily: fonts.body },
  btnPrimary: { background: COLORS.forest[700], color: COLORS.neutral.white },
  btnAccent: { background: COLORS.accent.main, color: COLORS.neutral.white },
  card: { background: COLORS.neutral.white, borderRadius: 20, overflow: "hidden", border: `1px solid ${COLORS.neutral[100]}` },
  section: { padding: "120px 0", position: "relative" },
};

// Reveal hook
function Reveal({ children, direction = "up", delay = 0, style }) {
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

// ═══════════════════════════════════════════
// HERO BACKGROUND
// ═══════════════════════════════════════════
function HeroBackground() {
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

// ═══════════════════════════════════════════
// NAVBAR
// ═══════════════════════════════════════════
function Navbar({ page, setPage }) {
  const [scrolled, setScrolled] = useState(false);
  const links = [
    { id: "inicio", label: "Inicio" },
    { id: "nosotros", label: "Nosotros" },
    { id: "servicios", label: "Servicios" },
    { id: "eventos", label: "Eventos" },
    { id: "impacto", label: "Impacto" },
    { id: "blog", label: "Blog" },
    { id: "transparencia", label: "Transparencia" },
    { id: "contacto", label: "Contacto" },
  ];

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const onHeroHome = page === "inicio" && !scrolled;

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
      background: scrolled ? "rgba(255,255,255,0.88)" : "transparent",
      backdropFilter: scrolled ? "blur(20px) saturate(180%)" : "none",
      WebkitBackdropFilter: scrolled ? "blur(20px) saturate(180%)" : "none",
      borderBottom: scrolled ? `1px solid ${COLORS.neutral[100]}` : "1px solid transparent",
      transition: "all 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
      padding: scrolled ? "14px 0" : "24px 0",
    }}>
      <div style={{ ...s.container, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div
          onClick={() => { setPage("inicio"); window.scrollTo({ top: 0, behavior: "smooth" }); }}
          style={{ display: "flex", alignItems: "center", gap: 14, cursor: "pointer" }}>
          <GirsaLogo size={scrolled ? 44 : 52} inverse={onHeroHome} />
          <div style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
            <span style={{
              fontFamily: fonts.heading, fontWeight: 800, fontSize: scrolled ? 24 : 28,
              color: onHeroHome ? COLORS.neutral.white : COLORS.forest[900],
              letterSpacing: "-0.01em", transition: "all 0.5s ease",
            }}>GIRSA</span>
            <span style={{
              fontSize: 10, fontWeight: 500, letterSpacing: 1.5, textTransform: "uppercase",
              color: onHeroHome ? COLORS.olive[300] : COLORS.olive[600], marginTop: 4,
              transition: "color 0.5s ease",
            }}>Sostenibilidad ambiental</span>
          </div>
        </div>

        <div style={{ display: "flex", gap: 4, alignItems: "center" }}>
          {links.map(l => (
            <button
              key={l.id}
              onClick={() => { setPage(l.id); window.scrollTo({ top: 0, behavior: "smooth" }); }}
              className={`nav-link ${page === l.id ? "active" : ""}`}
              style={{
                padding: "10px 14px", fontSize: 14,
                fontWeight: page === l.id ? 600 : 500,
                background: "transparent", border: "none", cursor: "pointer",
                fontFamily: fonts.body,
                color: onHeroHome
                  ? (page === l.id ? COLORS.neutral.white : "rgba(255,255,255,0.75)")
                  : (page === l.id ? COLORS.forest[700] : COLORS.neutral[500]),
              }}
            >{l.label}</button>
          ))}
        </div>
      </div>
    </nav>
  );
}

// ═══════════════════════════════════════════
// FOOTER
// ═══════════════════════════════════════════
function Footer({ setPage }) {
  return (
    <footer style={{ background: COLORS.forest[900], color: COLORS.neutral.white, padding: "100px 0 40px", position: "relative", overflow: "hidden" }}>
      <div style={{
        position: "absolute", bottom: "-200px", right: "-100px", width: 500, height: 500, borderRadius: "50%",
        background: `radial-gradient(circle, ${COLORS.teal[700]}40 0%, transparent 70%)`, filter: "blur(60px)",
      }} />
      <div style={{ ...s.container, position: "relative" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 48, marginBottom: 60 }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 20 }}>
              <GirsaLogo size={56} inverse />
              <div style={{ fontFamily: fonts.heading, fontSize: 32, fontWeight: 800 }}>GIRSA</div>
            </div>
            <p style={{ ...s.body, color: COLORS.forest[200], maxWidth: 340, lineHeight: 1.8 }}>
              Gestión Integral de Residuos y Sostenibilidad Ambiental. Transformamos residuos en oportunidades reales para las comunidades.
            </p>
          </div>
          <div>
            <div style={{ ...s.label, color: COLORS.olive[400], marginBottom: 20 }}>Navegación</div>
            {[["inicio", "Inicio"], ["nosotros", "Nosotros"], ["servicios", "Servicios"], ["eventos", "Eventos"]].map(([id, label]) => (
              <div key={id} onClick={() => { setPage(id); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                style={{ color: COLORS.forest[200], marginBottom: 12, cursor: "pointer", fontSize: 15, transition: "color 0.3s" }}
                onMouseEnter={e => e.currentTarget.style.color = COLORS.olive[300]}
                onMouseLeave={e => e.currentTarget.style.color = COLORS.forest[200]}>
                {label}
              </div>
            ))}
          </div>
          <div>
            <div style={{ ...s.label, color: COLORS.olive[400], marginBottom: 20 }}>Más</div>
            {[["impacto", "Impacto"], ["blog", "Blog"], ["transparencia", "Transparencia"], ["contacto", "Contacto"]].map(([id, label]) => (
              <div key={id} onClick={() => { setPage(id); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                style={{ color: COLORS.forest[200], marginBottom: 12, cursor: "pointer", fontSize: 15, transition: "color 0.3s" }}
                onMouseEnter={e => e.currentTarget.style.color = COLORS.olive[300]}
                onMouseLeave={e => e.currentTarget.style.color = COLORS.forest[200]}>
                {label}
              </div>
            ))}
          </div>
          <div>
            <div style={{ ...s.label, color: COLORS.olive[400], marginBottom: 20 }}>Contacto</div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, color: COLORS.forest[200], marginBottom: 12, fontSize: 14 }}>
              {icons.mail} Cruzcruz.luise@gmail.com
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, color: COLORS.forest[200], marginBottom: 12, fontSize: 14 }}>
              {icons.phone} 222 543 0566
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, color: COLORS.forest[200], fontSize: 14 }}>
              {icons.mapPin} Puebla, México
            </div>
          </div>
        </div>
        <div style={{ borderTop: `1px solid ${COLORS.forest[700]}`, paddingTop: 28, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontSize: 13, color: COLORS.forest[400] }}>© 2026 GIRSA. Todos los derechos reservados.</span>
          <span style={{ fontSize: 13, color: COLORS.forest[400] }}>Desarrollado por <span style={{ color: COLORS.neutral.white, fontWeight: 600 }}>Efyb</span></span>
        </div>
      </div>
    </footer>
  );
}

// ═══════════════════════════════════════════
// WHATSAPP
// ═══════════════════════════════════════════
function WhatsAppButton() {
  return (
    <>
      <style>{`
        @keyframes waPulse {
          0% { box-shadow: 0 4px 20px rgba(37,211,102,0.4), 0 0 0 0 rgba(37,211,102,0.6); }
          70% { box-shadow: 0 4px 20px rgba(37,211,102,0.4), 0 0 0 18px rgba(37,211,102,0); }
          100% { box-shadow: 0 4px 20px rgba(37,211,102,0.4), 0 0 0 0 rgba(37,211,102,0); }
        }
      `}</style>
      <a href="https://wa.me/522225430566" target="_blank" rel="noopener noreferrer"
        style={{
          position: "fixed", bottom: 28, right: 28, zIndex: 999, width: 62, height: 62, borderRadius: "50%",
          background: "#25D366", display: "flex", alignItems: "center", justifyContent: "center",
          color: "#fff", cursor: "pointer",
          animation: "waPulse 2.5s infinite",
          transition: "transform 0.3s ease",
        }}
        onMouseEnter={e => e.currentTarget.style.transform = "scale(1.1)"}
        onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}>
        {icons.whatsapp}
      </a>
    </>
  );
}

// ═══════════════════════════════════════════
// INICIO
// ═══════════════════════════════════════════
function Inicio({ setPage }) {
  return (
    <div>
      <section style={{ minHeight: "100vh", display: "flex", alignItems: "center", position: "relative" }}>
        <HeroBackground />
        <div style={{ ...s.container, position: "relative", zIndex: 2, paddingTop: 140, paddingBottom: 80 }}>
          <div style={{ maxWidth: 780 }}>
            <div className="fade-up-1" style={{ ...s.label, color: COLORS.olive[300], marginBottom: 24 }}>
              Asociación civil · Puebla, México
            </div>
            <h1 className="fade-up-2" style={{ ...s.h1, fontSize: 68, color: COLORS.neutral.white, marginBottom: 28 }}>
              Del residuo nace la <em style={{ fontStyle: "italic", color: COLORS.olive[300], fontWeight: 600 }}>oportunidad</em>
            </h1>
            <p className="fade-up-3" style={{ ...s.body, color: "rgba(255,255,255,0.78)", fontSize: 20, maxWidth: 600, marginBottom: 44, lineHeight: 1.7 }}>
              Organizamos reciclatones, gestionamos recolecciones y dignificamos bibliotecas para niños en zonas rezagadas.
            </p>
            <div className="fade-up-4" style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <button onClick={() => { setPage("eventos"); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                className="btn-fx"
                style={{ ...s.btn, background: COLORS.olive[600], color: COLORS.neutral.white }}>
                Próximos eventos {icons.arrowRight}
              </button>
              <button onClick={() => { setPage("nosotros"); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                className="btn-fx"
                style={{ ...s.btn, background: "rgba(255,255,255,0.1)", color: COLORS.neutral.white, border: "1.5px solid rgba(255,255,255,0.3)", backdropFilter: "blur(10px)" }}>
                Conócenos
              </button>
            </div>
          </div>

          <div className="fade-up-5" style={{
            position: "absolute", bottom: 40, left: "50%", transform: "translateX(-50%)",
            display: "flex", flexDirection: "column", alignItems: "center", gap: 8,
          }}>
            <div style={{ fontSize: 11, color: "rgba(255,255,255,0.5)", letterSpacing: 2, textTransform: "uppercase" }}>Scroll</div>
            <div style={{ width: 1, height: 40, background: "rgba(255,255,255,0.3)", animation: "pulse 2s ease infinite" }} />
          </div>
        </div>
      </section>

      <section style={{ background: COLORS.neutral.white, padding: "80px 0", borderBottom: `1px solid ${COLORS.neutral[100]}` }}>
        <div style={{ ...s.container, display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 40 }}>
          {[
            { n: "50", suf: "+", l: "Eventos de reciclaje", c: COLORS.forest[700] },
            { n: "12", suf: "", l: "Bibliotecas dignificadas", c: COLORS.teal[600] },
            { n: "200", suf: "T", l: "Toneladas recicladas", c: COLORS.olive[600] },
            { n: "30", suf: "+", l: "Aliados activos", c: COLORS.accent.main },
          ].map((stat, i) => (
            <Reveal key={i} delay={i * 100}>
              <div style={{ textAlign: "center" }}>
                <div style={{ fontFamily: fonts.heading, fontSize: 64, fontWeight: 700, color: stat.c, lineHeight: 1, letterSpacing: "-0.02em" }}>
                  {stat.n}<span style={{ fontSize: 36 }}>{stat.suf}</span>
                </div>
                <div style={{ fontSize: 14, color: COLORS.neutral[500], marginTop: 10, fontWeight: 500 }}>{stat.l}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section style={{ ...s.section, background: COLORS.neutral[50], overflow: "hidden" }}>
        <div style={{
          position: "absolute", top: "10%", right: "-5%", width: 400, height: 400, borderRadius: "50%",
          background: `radial-gradient(circle, ${COLORS.olive[200]}40 0%, transparent 70%)`, filter: "blur(80px)",
          animation: "blob1 20s ease-in-out infinite",
        }} />
        <div style={{ ...s.container, position: "relative" }}>
          <Reveal>
            <div style={{ textAlign: "center", marginBottom: 72 }}>
              <div style={{ ...s.label, marginBottom: 16 }}>Lo que hacemos</div>
              <h2 style={s.h2}>Dos misiones, un impacto</h2>
            </div>
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }}>
            <Reveal direction="right" delay={100}>
              <div className="hover-lift" style={{ ...s.card, padding: 52, cursor: "pointer", height: "100%" }}
                onClick={() => { setPage("servicios"); window.scrollTo({ top: 0, behavior: "smooth" }); }}>
                <div style={{
                  width: 64, height: 64, borderRadius: 16, background: COLORS.forest[50],
                  display: "flex", alignItems: "center", justifyContent: "center", color: COLORS.forest[700], marginBottom: 28,
                }}>{icons.recycle}</div>
                <h3 style={{ ...s.h3, marginBottom: 14 }}>Eventos de reciclaje</h3>
                <p style={s.body}>Gestionamos reciclatones, recolecciones empresariales y eventos con causa.</p>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 24, color: COLORS.forest[700], fontWeight: 600, fontSize: 15 }}>
                  Conocer más {icons.arrowRight}
                </div>
              </div>
            </Reveal>
            <Reveal direction="left" delay={200}>
              <div className="hover-lift" style={{ ...s.card, padding: 52, cursor: "pointer", height: "100%" }}
                onClick={() => { setPage("servicios"); window.scrollTo({ top: 0, behavior: "smooth" }); }}>
                <div style={{
                  width: 64, height: 64, borderRadius: 16, background: COLORS.teal[50],
                  display: "flex", alignItems: "center", justifyContent: "center", color: COLORS.teal[700], marginBottom: 28,
                }}>{icons.book}</div>
                <h3 style={{ ...s.h3, marginBottom: 14 }}>Dignificaciones</h3>
                <p style={s.body}>Equipamos bibliotecas para niños en zonas rezagadas con libros y equipos de cómputo, para que tengan acceso a información y tecnología.</p>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 24, color: COLORS.teal[700], fontWeight: 600, fontSize: 15 }}>
                  Conocer más {icons.arrowRight}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section style={{
        background: `linear-gradient(135deg, ${COLORS.forest[900]} 0%, ${COLORS.forest[800]} 50%, ${COLORS.teal[900]} 100%)`,
        backgroundSize: "200% 200%",
        animation: "gradientShift 15s ease infinite",
        padding: "120px 0", position: "relative", overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", top: "-20%", left: "-10%", width: 500, height: 500, borderRadius: "50%",
          background: `radial-gradient(circle, ${COLORS.olive[600]}30 0%, transparent 70%)`,
          filter: "blur(60px)", animation: "blob1 18s ease-in-out infinite",
        }} />
        <div style={{
          position: "absolute", bottom: "-30%", right: "-5%", width: 600, height: 600, borderRadius: "50%",
          background: `radial-gradient(circle, ${COLORS.teal[600]}30 0%, transparent 70%)`,
          filter: "blur(80px)", animation: "blob2 22s ease-in-out infinite",
        }} />
        <div style={{ ...s.container, textAlign: "center", position: "relative" }}>
          <Reveal>
            <h2 style={{ ...s.h2, color: COLORS.neutral.white, marginBottom: 20, fontSize: 48 }}>¿Quieres organizar un evento de reciclaje?</h2>
            <p style={{ ...s.body, color: "rgba(255,255,255,0.75)", marginBottom: 40, maxWidth: 620, margin: "0 auto 40px", fontSize: 18 }}>
              Organizamos recolecciones en colonias, juntas auxiliares, parroquias, escuelas o empresas. Nosotros nos encargamos de la logística y tratamiento. Tú solo nos indicas el lugar.
            </p>
            <button onClick={() => { setPage("contacto"); window.scrollTo({ top: 0, behavior: "smooth" }); }}
              className="btn-fx"
              style={{ ...s.btn, ...s.btnAccent, fontSize: 16, padding: "18px 40px" }}>
              Agendar evento {icons.arrowRight}
            </button>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

// ═══════════════════════════════════════════
// NOSOTROS
// ═══════════════════════════════════════════
function Nosotros() {
  return (
    <div style={{ paddingTop: 120 }}>
      <section style={{ ...s.section, paddingTop: 60 }}>
        <div style={s.container}>
          <Reveal>
            <div style={{ ...s.label, marginBottom: 16 }}>Quiénes somos</div>
            <h1 style={{ ...s.h1, marginBottom: 28, maxWidth: 900 }}>Gestión Integral de Residuos y Sostenibilidad Ambiental</h1>
            <p style={{ ...s.body, fontSize: 20, maxWidth: 720, marginBottom: 80, lineHeight: 1.7 }}>
              Somos una asociación civil enfocada en brindar soluciones de logística, gestión y tratamiento de residuos reciclables. Nuestro motor es crear impacto ambiental y social real en Puebla.
            </p>
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 32 }}>
            {[
              { icon: icons.globe, title: "Misión", text: "Brindar soluciones integrales de reciclaje y gestión de residuos, mientras dignificamos espacios educativos para niños en zonas vulnerables.", color: COLORS.forest },
              { icon: icons.chart, title: "Visión", text: "Ser la asociación civil referente en Puebla en gestión de residuos y desarrollo comunitario a través de la educación y la tecnología.", color: COLORS.teal },
              { icon: icons.heart, title: "Valores", text: "Compromiso ambiental, impacto social real, transparencia en cada acción y cercanía con las comunidades que servimos.", color: COLORS.olive },
            ].map((item, i) => (
              <Reveal key={i} delay={i * 120}>
                <div className="hover-lift" style={{ ...s.card, padding: 40, height: "100%" }}>
                  <div style={{
                    width: 56, height: 56, borderRadius: 14, background: item.color[50],
                    display: "flex", alignItems: "center", justifyContent: "center", color: item.color[700], marginBottom: 24,
                  }}>{item.icon}</div>
                  <h3 style={{ ...s.h3, marginBottom: 12 }}>{item.title}</h3>
                  <p style={s.body}>{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section style={{ ...s.section, background: COLORS.neutral[50] }}>
        <div style={s.container}>
          <Reveal>
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <div style={{ ...s.label, marginBottom: 14 }}>Nuestro equipo</div>
              <h2 style={s.h2}>Las personas detrás de GIRSA</h2>
            </div>
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 28 }}>
            {["Luis Ernesto Cruz", "Colaborador 2", "Colaborador 3", "Colaborador 4"].map((name, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="hover-lift" style={{ textAlign: "center" }}>
                  <div style={{
                    width: "100%", aspectRatio: "1", borderRadius: 20,
                    background: `linear-gradient(135deg, ${COLORS.forest[50]}, ${COLORS.teal[50]})`,
                    display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 18,
                  }}>
                    <div style={{
                      width: 72, height: 72, borderRadius: "50%", background: COLORS.forest[200],
                      display: "flex", alignItems: "center", justifyContent: "center",
                      color: COLORS.forest[700], fontFamily: fonts.heading, fontSize: 26, fontWeight: 700,
                    }}>
                      {name.split(" ").map(n => n[0]).slice(0, 2).join("")}
                    </div>
                  </div>
                  <div style={{ fontWeight: 600, fontSize: 17, color: COLORS.forest[900] }}>{name}</div>
                  <div style={{ fontSize: 14, color: COLORS.neutral[300], marginTop: 4 }}>{i === 0 ? "Director" : "Equipo GIRSA"}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

// ═══════════════════════════════════════════
// SERVICIOS
// ═══════════════════════════════════════════
function Servicios() {
  return (
    <div style={{ paddingTop: 120 }}>
      <section style={{ ...s.section, paddingTop: 60 }}>
        <div style={s.container}>
          <Reveal>
            <div style={{ ...s.label, marginBottom: 16 }}>Servicios</div>
            <h1 style={{ ...s.h1, marginBottom: 28 }}>Lo que hacemos</h1>
            <p style={{ ...s.body, fontSize: 20, maxWidth: 640, marginBottom: 80, lineHeight: 1.7 }}>
              No vendemos productos. Ofrecemos servicios gratuitos de recolección, eventos de reciclaje y dignificación de espacios educativos.
            </p>
          </Reveal>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, marginBottom: 96, alignItems: "center" }}>
            <Reveal direction="right">
              <div>
                <div style={{ display: "inline-flex", padding: "8px 18px", borderRadius: 999, background: COLORS.forest[50], color: COLORS.forest[700], fontSize: 13, fontWeight: 600, marginBottom: 24 }}>
                  Reciclaje
                </div>
                <h2 style={{ ...s.h2, fontSize: 36, marginBottom: 20 }}>Eventos de reciclaje</h2>
                <p style={{ ...s.body, marginBottom: 28, fontSize: 17 }}>Gestionamos reciclatones, recolecciones empresariales y eventos con causa. Organizamos la logística para colonias, juntas auxiliares, parroquias, escuelas o empresas — tú solo nos indicas el lugar.</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                  {["Reciclatones comunitarios", "Recolecciones empresariales", "Eventos con causa", "Cálculo de huella de carbono"].map((item, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      <div style={{ width: 26, height: 26, borderRadius: "50%", background: COLORS.forest[50], display: "flex", alignItems: "center", justifyContent: "center", color: COLORS.forest[700], flexShrink: 0 }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M20 6L9 17l-5-5"/></svg>
                      </div>
                      <span style={{ fontSize: 15, color: COLORS.neutral[500] }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
            <Reveal direction="left">
              <div style={{
                aspectRatio: "4/3", borderRadius: 24,
                background: `linear-gradient(135deg, ${COLORS.forest[50]}, ${COLORS.olive[50]})`,
                display: "flex", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden",
              }}>
                <div style={{
                  position: "absolute", top: "-20%", right: "-10%", width: 300, height: 300, borderRadius: "50%",
                  background: `radial-gradient(circle, ${COLORS.olive[200]}60 0%, transparent 70%)`,
                  animation: "blob1 18s ease-in-out infinite",
                }} />
                <div style={{ color: COLORS.forest[400], transform: "scale(3)", position: "relative" }}>{icons.recycle}</div>
              </div>
            </Reveal>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "center" }}>
            <Reveal direction="right">
              <div style={{
                aspectRatio: "4/3", borderRadius: 24,
                background: `linear-gradient(135deg, ${COLORS.teal[50]}, ${COLORS.forest[50]})`,
                display: "flex", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden",
              }}>
                <div style={{
                  position: "absolute", bottom: "-20%", left: "-10%", width: 300, height: 300, borderRadius: "50%",
                  background: `radial-gradient(circle, ${COLORS.teal[200]}60 0%, transparent 70%)`,
                  animation: "blob2 20s ease-in-out infinite",
                }} />
                <div style={{ color: COLORS.teal[400], transform: "scale(3)", position: "relative" }}>{icons.book}</div>
              </div>
            </Reveal>
            <Reveal direction="left">
              <div>
                <div style={{ display: "inline-flex", padding: "8px 18px", borderRadius: 999, background: COLORS.teal[50], color: COLORS.teal[700], fontSize: 13, fontWeight: 600, marginBottom: 24 }}>
                  Impacto social
                </div>
                <h2 style={{ ...s.h2, fontSize: 36, marginBottom: 20 }}>Dignificaciones</h2>
                <p style={{ ...s.body, marginBottom: 28, fontSize: 17 }}>Equipamos bibliotecas para niños en zonas rezagadas. Donamos libros y equipos de cómputo para que los niños tengan acceso a información y tecnología.</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                  {["Donación de libros", "Equipos de cómputo", "Dignificación de espacios", "Acceso a tecnología"].map((item, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      <div style={{ width: 26, height: 26, borderRadius: "50%", background: COLORS.teal[50], display: "flex", alignItems: "center", justifyContent: "center", color: COLORS.teal[700], flexShrink: 0 }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M20 6L9 17l-5-5"/></svg>
                      </div>
                      <span style={{ fontSize: 15, color: COLORS.neutral[500] }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}

// ═══════════════════════════════════════════
// EVENTOS
// ═══════════════════════════════════════════
function Eventos() {
  const eventos = [
    { date: "15 ABR", title: "Jornada de reciclaje electrónico", location: "Parque Ecológico, Puebla", type: "Público" },
    { date: "28 ABR", title: "Recolección empresarial Q2", location: "Zona industrial, Puebla", type: "Empresas" },
    { date: "10 MAY", title: "Dignificación Biblioteca Sta. María", location: "Santa María Xonacatepec", type: "Comunidad" },
    { date: "22 MAY", title: "Feria del reciclaje infantil", location: "Centro Cultural, Puebla", type: "Público" },
  ];
  return (
    <div style={{ paddingTop: 120 }}>
      <section style={{ ...s.section, paddingTop: 60 }}>
        <div style={s.container}>
          <Reveal>
            <div style={{ ...s.label, marginBottom: 16 }}>Eventos</div>
            <h1 style={{ ...s.h1, marginBottom: 28 }}>Próximos eventos</h1>
            <p style={{ ...s.body, fontSize: 20, maxWidth: 640, marginBottom: 64, lineHeight: 1.7 }}>
              Regístrate o agenda un evento de reciclaje con nosotros. La participación es completamente gratuita.
            </p>
          </Reveal>
          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            {eventos.map((ev, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="hover-lift" style={{ ...s.card, padding: "32px 40px", display: "flex", alignItems: "center", gap: 36, cursor: "pointer" }}>
                  <div style={{ textAlign: "center", minWidth: 72 }}>
                    <div style={{ fontFamily: fonts.heading, fontSize: 32, fontWeight: 700, color: COLORS.forest[700], lineHeight: 1 }}>{ev.date.split(" ")[0]}</div>
                    <div style={{ fontSize: 13, fontWeight: 700, color: COLORS.olive[600], letterSpacing: 1.5 }}>{ev.date.split(" ")[1]}</div>
                  </div>
                  <div style={{ width: 1, height: 52, background: COLORS.neutral[100] }} />
                  <div style={{ flex: 1 }}>
                    <h3 style={{ ...s.h3, fontSize: 21, marginBottom: 6 }}>{ev.title}</h3>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, color: COLORS.neutral[300], fontSize: 14 }}>
                      {icons.mapPin} {ev.location}
                    </div>
                  </div>
                  <div style={{
                    display: "inline-flex", padding: "8px 16px", borderRadius: 999,
                    background: ev.type === "Empresas" ? COLORS.teal[50] : ev.type === "Comunidad" ? COLORS.accent.bg : COLORS.forest[50],
                    color: ev.type === "Empresas" ? COLORS.teal[700] : ev.type === "Comunidad" ? COLORS.accent.main : COLORS.forest[700],
                    fontSize: 13, fontWeight: 600,
                  }}>{ev.type}</div>
                  <button className="btn-fx" style={{ ...s.btn, ...s.btnPrimary, padding: "12px 24px", fontSize: 14 }}>Registrarse</button>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section style={{ ...s.section, background: COLORS.neutral[50] }}>
        <div style={s.container}>
          <Reveal>
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <div style={{ ...s.label, marginBottom: 14 }}>Galería</div>
              <h2 style={s.h2}>Proyectos concluidos</h2>
            </div>
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
            {[COLORS.forest, COLORS.teal, COLORS.olive, COLORS.forest, COLORS.teal, COLORS.olive].map((c, i) => (
              <Reveal key={i} delay={i * 60}>
                <div className="hover-lift" style={{
                  aspectRatio: i === 0 || i === 5 ? "1" : "4/3", borderRadius: 16,
                  background: `linear-gradient(135deg, ${c[50]}, ${c[200]})`,
                  display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer",
                  gridRow: i === 0 ? "1 / 3" : "auto",
                }}>
                  <div style={{ color: c[400] }}>{icons.image}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

// ═══════════════════════════════════════════
// IMPACTO
// ═══════════════════════════════════════════
function Impacto() {
  return (
    <div style={{ paddingTop: 120 }}>
      <section style={{ ...s.section, paddingTop: 60 }}>
        <div style={s.container}>
          <Reveal>
            <div style={{ ...s.label, marginBottom: 16 }}>Nuestro impacto</div>
            <h1 style={{ ...s.h1, marginBottom: 28 }}>Impacto ambiental medible</h1>
            <p style={{ ...s.body, fontSize: 20, maxWidth: 640, marginBottom: 80, lineHeight: 1.7 }}>
              Cada acción se traduce en datos reales. Aquí está nuestro impacto acumulado.
            </p>
          </Reveal>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24, marginBottom: 72 }}>
            {[
              { n: "200", suf: "T", l: "Toneladas recicladas", c: COLORS.forest[700] },
              { n: "45", suf: "T", l: "CO₂ evitado", c: COLORS.teal[600] },
              { n: "12", suf: "", l: "Bibliotecas dignificadas", c: COLORS.olive[600] },
              { n: "3,500", suf: "+", l: "Niños beneficiados", c: COLORS.accent.main },
            ].map((item, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="hover-lift" style={{ ...s.card, padding: 40, textAlign: "center" }}>
                  <div style={{ fontFamily: fonts.heading, fontSize: 52, fontWeight: 700, color: item.c, lineHeight: 1, letterSpacing: "-0.02em" }}>
                    {item.n}<span style={{ fontSize: 32 }}>{item.suf}</span>
                  </div>
                  <div style={{ fontSize: 14, color: COLORS.neutral[500], marginTop: 12, fontWeight: 500 }}>{item.l}</div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div style={{
              borderRadius: 24, padding: 56, position: "relative", overflow: "hidden",
              background: `linear-gradient(135deg, ${COLORS.forest[900]}, ${COLORS.teal[900]})`,
              backgroundSize: "200% 200%", animation: "gradientShift 18s ease infinite",
            }}>
              <div style={{
                position: "absolute", top: "-30%", right: "-10%", width: 500, height: 500, borderRadius: "50%",
                background: `radial-gradient(circle, ${COLORS.olive[600]}30 0%, transparent 70%)`,
                filter: "blur(60px)", animation: "blob1 20s ease-in-out infinite",
              }} />
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "center", position: "relative" }}>
                <div>
                  <div style={{ ...s.label, color: COLORS.olive[300], marginBottom: 14 }}>Calculadora</div>
                  <h2 style={{ ...s.h2, color: COLORS.neutral.white, marginBottom: 18, fontSize: 40 }}>Huella de carbono</h2>
                  <p style={{ ...s.body, color: "rgba(255,255,255,0.75)", fontSize: 17 }}>Medimos el impacto ambiental de cada evento y recolección. Cada organización recibe un reporte detallado de las toneladas de CO₂ que ayudó a evitar.</p>
                </div>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <div style={{ color: COLORS.olive[300], transform: "scale(4.5)", animation: "leafSway 4s ease-in-out infinite" }}>{icons.leaf}</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

// ═══════════════════════════════════════════
// BLOG
// ═══════════════════════════════════════════
function Blog() {
  const posts = [
    { tag: "Medio ambiente", title: "5 formas de reducir residuos en tu empresa", excerpt: "Pequeños cambios en la operación diaria pueden generar un gran impacto ambiental.", date: "22 Mar 2026" },
    { tag: "Comunidad", title: "Biblioteca Santa María: antes y después", excerpt: "Así transformamos un espacio abandonado en un centro de aprendizaje para 200 niños.", date: "15 Mar 2026" },
    { tag: "Reciclaje", title: "¿Qué pasa con tu basura electrónica?", excerpt: "El 80% de los residuos electrónicos en México terminan en rellenos sanitarios.", date: "8 Mar 2026" },
    { tag: "Eventos", title: "Resultados de la jornada Q1 2026", excerpt: "Más de 15 toneladas recicladas en un solo día gracias a 8 aliados participantes.", date: "1 Mar 2026" },
  ];
  return (
    <div style={{ paddingTop: 120 }}>
      <section style={{ ...s.section, paddingTop: 60 }}>
        <div style={s.container}>
          <Reveal>
            <div style={{ ...s.label, marginBottom: 16 }}>Blog</div>
            <h1 style={{ ...s.h1, marginBottom: 64 }}>Noticias y artículos</h1>
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 36 }}>
            {posts.map((post, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="hover-lift" style={{ ...s.card, cursor: "pointer" }}>
                  <div style={{
                    aspectRatio: "16/9",
                    background: `linear-gradient(135deg, ${[COLORS.forest, COLORS.teal, COLORS.olive, COLORS.forest][i][50]}, ${[COLORS.forest, COLORS.teal, COLORS.olive, COLORS.forest][i][200]})`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}>
                    <div style={{ color: [COLORS.forest, COLORS.teal, COLORS.olive, COLORS.forest][i][400] }}>{icons.file}</div>
                  </div>
                  <div style={{ padding: 32 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
                      <span style={{ display: "inline-flex", padding: "5px 14px", borderRadius: 999, background: COLORS.forest[50], color: COLORS.forest[700], fontSize: 12, fontWeight: 600 }}>{post.tag}</span>
                      <span style={{ fontSize: 13, color: COLORS.neutral[300] }}>{post.date}</span>
                    </div>
                    <h3 style={{ ...s.h3, fontSize: 22, marginBottom: 10 }}>{post.title}</h3>
                    <p style={{ ...s.body, fontSize: 15 }}>{post.excerpt}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

// ═══════════════════════════════════════════
// TRANSPARENCIA
// ═══════════════════════════════════════════
function Transparencia() {
  return (
    <div style={{ paddingTop: 120 }}>
      <section style={{ ...s.section, paddingTop: 60 }}>
        <div style={s.container}>
          <Reveal>
            <div style={{ ...s.label, marginBottom: 16 }}>Transparencia</div>
            <h1 style={{ ...s.h1, marginBottom: 28 }}>Canal de transparencia</h1>
            <p style={{ ...s.body, fontSize: 20, maxWidth: 640, marginBottom: 80, lineHeight: 1.7 }}>
              Nos comprometemos con la rendición de cuentas. Aquí puedes consultar nuestros informes y reportar cualquier irregularidad.
            </p>
          </Reveal>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 36 }}>
            <Reveal direction="right">
              <div className="hover-lift" style={{ ...s.card, padding: 44 }}>
                <div style={{ width: 56, height: 56, borderRadius: 14, background: COLORS.teal[50], display: "flex", alignItems: "center", justifyContent: "center", color: COLORS.teal[700], marginBottom: 24 }}>
                  {icons.file}
                </div>
                <h3 style={{ ...s.h3, marginBottom: 14 }}>Informes y rendición de cuentas</h3>
                <p style={{ ...s.body, marginBottom: 28 }}>Consulta nuestros reportes financieros, informes de actividades y resultados de impacto.</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {["Informe anual 2025", "Reporte financiero Q4 2025", "Informe de impacto 2025"].map((doc, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "center", gap: 12, padding: "14px 18px", borderRadius: 12, background: COLORS.neutral[50], cursor: "pointer", transition: "all 0.3s" }}>
                      {icons.file}
                      <span style={{ fontSize: 15, fontWeight: 500, color: COLORS.forest[900] }}>{doc}</span>
                      <span style={{ marginLeft: "auto", fontSize: 12, color: COLORS.neutral[300], fontWeight: 600, letterSpacing: 1 }}>PDF</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal direction="left">
              <div className="hover-lift" style={{ ...s.card, padding: 44 }}>
                <div style={{ width: 56, height: 56, borderRadius: 14, background: COLORS.accent.bg, display: "flex", alignItems: "center", justifyContent: "center", color: COLORS.accent.main, marginBottom: 24 }}>
                  {icons.shield}
                </div>
                <h3 style={{ ...s.h3, marginBottom: 14 }}>Buzón de denuncias</h3>
                <p style={{ ...s.body, marginBottom: 28 }}>Reporta cualquier irregularidad de forma anónima y segura. Tu identidad está protegida.</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                  <input placeholder="Asunto" style={{ padding: "14px 18px", borderRadius: 10, border: `1px solid ${COLORS.neutral[100]}`, fontSize: 15, fontFamily: fonts.body, outline: "none", transition: "border-color 0.3s" }} />
                  <textarea placeholder="Describe la situación..." rows={4} style={{ padding: "14px 18px", borderRadius: 10, border: `1px solid ${COLORS.neutral[100]}`, fontSize: 15, fontFamily: fonts.body, outline: "none", resize: "vertical", transition: "border-color 0.3s" }} />
                  <button className="btn-fx" style={{ ...s.btn, ...s.btnPrimary, justifyContent: "center" }}>Enviar reporte anónimo</button>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}

// ═══════════════════════════════════════════
// CONTACTO
// ═══════════════════════════════════════════
function Contacto() {
  return (
    <div style={{ paddingTop: 120 }}>
      <section style={{ ...s.section, paddingTop: 60 }}>
        <div style={s.container}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 72 }}>
            <Reveal direction="right">
              <div>
                <div style={{ ...s.label, marginBottom: 16 }}>Contacto</div>
                <h1 style={{ ...s.h1, marginBottom: 28 }}>Hablemos</h1>
                <p style={{ ...s.body, fontSize: 20, marginBottom: 48, lineHeight: 1.7 }}>
                  ¿Quieres organizar un evento, agendar una recolección o colaborar con nosotros? Escríbenos.
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                  {[
                    { icon: icons.mail, label: "Correo", value: "Cruzcruz.luise@gmail.com" },
                    { icon: icons.phone, label: "WhatsApp", value: "222 543 0566" },
                    { icon: icons.mapPin, label: "Ubicación", value: "Puebla, México" },
                  ].map((item, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "center", gap: 18 }}>
                      <div style={{ width: 52, height: 52, borderRadius: 14, background: COLORS.forest[50], display: "flex", alignItems: "center", justifyContent: "center", color: COLORS.forest[700] }}>
                        {item.icon}
                      </div>
                      <div>
                        <div style={{ fontSize: 13, color: COLORS.neutral[300], marginBottom: 2 }}>{item.label}</div>
                        <div style={{ fontSize: 16, fontWeight: 500, color: COLORS.forest[900] }}>{item.value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal direction="left">
              <div style={{ ...s.card, padding: 48 }}>
                <h3 style={{ ...s.h3, marginBottom: 28 }}>Envía un mensaje</h3>
                <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }}>
                    <input placeholder="Nombre" style={{ padding: "16px 18px", borderRadius: 10, border: `1px solid ${COLORS.neutral[100]}`, fontSize: 15, fontFamily: fonts.body, outline: "none", transition: "border-color 0.3s" }} />
                    <input placeholder="Organización" style={{ padding: "16px 18px", borderRadius: 10, border: `1px solid ${COLORS.neutral[100]}`, fontSize: 15, fontFamily: fonts.body, outline: "none", transition: "border-color 0.3s" }} />
                  </div>
                  <input placeholder="Correo electrónico" style={{ padding: "16px 18px", borderRadius: 10, border: `1px solid ${COLORS.neutral[100]}`, fontSize: 15, fontFamily: fonts.body, outline: "none", transition: "border-color 0.3s" }} />
                  <select style={{ padding: "16px 18px", borderRadius: 10, border: `1px solid ${COLORS.neutral[100]}`, fontSize: 15, fontFamily: fonts.body, outline: "none", color: COLORS.neutral[300], background: COLORS.neutral.white, transition: "border-color 0.3s" }}>
                    <option>¿En qué podemos ayudarte?</option>
                    <option>Agendar evento de reciclaje</option>
                    <option>Recolección en mi comunidad</option>
                    <option>Colaborar / Donar</option>
                    <option>Información general</option>
                  </select>
                  <textarea placeholder="Tu mensaje..." rows={4} style={{ padding: "16px 18px", borderRadius: 10, border: `1px solid ${COLORS.neutral[100]}`, fontSize: 15, fontFamily: fonts.body, outline: "none", resize: "vertical", transition: "border-color 0.3s" }} />
                  <button className="btn-fx" style={{ ...s.btn, ...s.btnPrimary, justifyContent: "center", padding: "18px" }}>
                    Enviar mensaje {icons.arrowRight}
                  </button>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section style={{ background: COLORS.forest[50], padding: "72px 0" }}>
        <div style={{ ...s.container, display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 24 }}>
          <div>
            <h3 style={{ ...s.h3, fontSize: 30 }}>¿Prefieres escribirnos por WhatsApp?</h3>
            <p style={{ ...s.body, marginTop: 6 }}>Respuesta inmediata en horario de oficina.</p>
          </div>
          <a href="https://wa.me/522225430566" target="_blank" rel="noopener noreferrer" className="btn-fx" style={{ ...s.btn, background: "#25D366", color: "#fff", textDecoration: "none", fontSize: 16, padding: "18px 36px" }}>
            {icons.whatsapp} Abrir WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}

// ═══════════════════════════════════════════
// APP
// ═══════════════════════════════════════════
export default function App() {
  const [page, setPage] = useState("inicio");

  const pages = {
    inicio: <Inicio setPage={setPage} />,
    nosotros: <Nosotros />,
    servicios: <Servicios />,
    eventos: <Eventos />,
    impacto: <Impacto />,
    blog: <Blog />,
    transparencia: <Transparencia />,
    contacto: <Contacto />,
  };

  return (
    <div style={s.page}>
      <style>{globalCSS}</style>
      <Navbar page={page} setPage={setPage} />
      {pages[page]}
      <Footer setPage={setPage} />
      <WhatsAppButton />
    </div>
  );
}
