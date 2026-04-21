"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { COLORS, fonts, s } from "../utils/theme";
import { GirsaLogo } from "./GirsaLogo";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { id: "/", label: "Inicio" },
    { id: "/nosotros", label: "Nosotros" },
    { id: "/servicios", label: "Servicios" },
    { id: "/eventos", label: "Eventos" },
    { id: "/impacto", label: "Impacto" },
    { id: "/transparencia", label: "Transparencia" },
    { id: "/contacto", label: "Contacto" },
  ];

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", fn);
    fn();
    return () => window.removeEventListener("scroll", fn);
  }, []);

  // Cerrar menú al cambiar de ruta
  useEffect(() => { setOpen(false); }, [pathname]);

  // Bloquear scroll cuando está abierto
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const onHeroHome = pathname === "/" && !scrolled;

  const iconColor = onHeroHome ? COLORS.neutral.white : COLORS.forest[900];

  return (
    <>
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
        background: scrolled || open ? "rgba(255,255,255,0.95)" : "transparent",
        backdropFilter: scrolled || open ? "blur(20px) saturate(180%)" : "none",
        WebkitBackdropFilter: scrolled || open ? "blur(20px) saturate(180%)" : "none",
        borderBottom: scrolled ? `1px solid ${COLORS.neutral[100]}` : "1px solid transparent",
        transition: "all 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
        padding: scrolled ? "14px 0" : "24px 0",
      }}>
        <div style={{ ...s.container, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          {/* Logo */}
          <Link href="/" style={{ textDecoration: "none" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 14, cursor: "pointer" }}>
              <GirsaLogo size={scrolled ? 44 : 52} inverse={onHeroHome && !open} />
              <div style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
                <span style={{
                  fontFamily: fonts.heading, fontWeight: 800, fontSize: scrolled ? 24 : 28,
                  color: (onHeroHome && !open) ? COLORS.neutral.white : COLORS.forest[900],
                  letterSpacing: "-0.01em", transition: "all 0.5s ease",
                }}>GIRSA</span>
                <span style={{
                  fontSize: 10, fontWeight: 500, letterSpacing: 1.5, textTransform: "uppercase",
                  color: (onHeroHome && !open) ? COLORS.olive[300] : COLORS.olive[600], marginTop: 4,
                  transition: "color 0.5s ease",
                }}>Sostenibilidad ambiental</span>
              </div>
            </div>
          </Link>

          {/* Links desktop */}
          <div className="nav-desktop-links" style={{ display: "flex", gap: 4, alignItems: "center" }}>
            {links.map(l => (
              <Link
                key={l.id}
                href={l.id}
                className={`nav-link ${pathname === l.id ? "active" : ""}`}
                style={{
                  textDecoration: "none",
                  padding: "10px 14px", fontSize: 14,
                  fontWeight: pathname === l.id ? 600 : 500,
                  background: "transparent", border: "none", cursor: "pointer",
                  fontFamily: fonts.body,
                  color: onHeroHome
                    ? (pathname === l.id ? COLORS.neutral.white : "rgba(255,255,255,0.75)")
                    : (pathname === l.id ? COLORS.forest[700] : COLORS.neutral[500]),
                }}
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* Botón hamburguesa (solo mobile) */}
          <button
            className="hamburger-btn"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            onClick={() => setOpen(o => !o)}
            style={{
              display: "none",
              background: "none", border: "none", cursor: "pointer",
              padding: 8, borderRadius: 8, color: iconColor,
              transition: "color 0.3s ease",
            }}
          >
            {open ? (
              // X icon
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={open ? COLORS.forest[900] : iconColor} strokeWidth="2.5" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              // Hamburger icon
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={iconColor} strokeWidth="2.5" strokeLinecap="round">
                <line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile overlay menu */}
      <div
        className="mobile-menu-overlay"
        style={{
          position: "fixed", top: 0, left: 0, right: 0, bottom: 0, zIndex: 999,
          background: "rgba(255,255,255,0.98)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
          gap: 8,
          opacity: open ? 1 : 0,
          pointerEvents: open ? "auto" : "none",
          transition: "opacity 0.3s ease",
        }}
      >
        {links.map((l, i) => (
          <Link
            key={l.id}
            href={l.id}
            style={{
              textDecoration: "none",
              fontFamily: fonts.heading,
              fontWeight: pathname === l.id ? 700 : 500,
              fontSize: 28,
              color: pathname === l.id ? COLORS.forest[700] : COLORS.neutral[700],
              padding: "10px 24px",
              borderRadius: 12,
              background: pathname === l.id ? COLORS.forest[50] : "transparent",
              transition: "all 0.2s ease",
              transform: open ? "translateY(0)" : "translateY(20px)",
              transitionDelay: `${i * 40}ms`,
              width: "100%",
              textAlign: "center",
            }}
          >
            {l.label}
          </Link>
        ))}

        <div style={{ marginTop: 24, fontSize: 13, color: COLORS.neutral[300] }}>girsapuebla.org</div>
      </div>
    </>
  );
}
