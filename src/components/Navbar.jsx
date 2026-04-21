"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { COLORS, fonts, s } from "../utils/theme";
import { GirsaLogo } from "./GirsaLogo";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);
  const [mounted, setMounted]   = useState(false);
  const pathname = usePathname();

  const links = [
    { id: "/",              label: "Inicio" },
    { id: "/nosotros",      label: "Nosotros" },
    { id: "/servicios",     label: "Servicios" },
    { id: "/eventos",       label: "Eventos" },
    { id: "/impacto",       label: "Impacto" },
    { id: "/transparencia", label: "Transparencia" },
    { id: "/contacto",      label: "Contacto" },
  ];

  useEffect(() => {
    setMounted(true);
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", fn);
    fn();
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const onHeroHome = pathname === "/" && !scrolled;
  const logoInverse = onHeroHome && !open;
  const iconColor   = logoInverse ? COLORS.neutral.white : COLORS.forest[900];

  return (
    <>
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
        background: scrolled || open ? "rgba(255,255,255,0.96)" : "transparent",
        backdropFilter: scrolled || open ? "blur(24px) saturate(180%)" : "none",
        WebkitBackdropFilter: scrolled || open ? "blur(24px) saturate(180%)" : "none",
        borderBottom: scrolled ? `1px solid ${COLORS.neutral[100]}` : "1px solid transparent",
        transition: "all 0.45s cubic-bezier(0.16, 1, 0.3, 1)",
        padding: scrolled ? "14px 0" : "24px 0",
      }}>
        <div style={{ ...s.container, display: "flex", alignItems: "center", justifyContent: "space-between" }}>

          {/* Logo */}
          <Link href="/" style={{ textDecoration: "none" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 14, cursor: "pointer" }}>
              <GirsaLogo size={scrolled ? 44 : 52} inverse={logoInverse} />
              <div style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
                <span style={{
                  fontFamily: fonts.heading, fontWeight: 800,
                  fontSize: scrolled ? 24 : 28,
                  color: logoInverse ? COLORS.neutral.white : COLORS.forest[900],
                  letterSpacing: "-0.01em", transition: "all 0.45s ease",
                }}>GIRSA</span>
                <span style={{
                  fontSize: 10, fontWeight: 500, letterSpacing: 1.5, textTransform: "uppercase",
                  color: logoInverse ? COLORS.olive[300] : COLORS.olive[600], marginTop: 4,
                  transition: "color 0.45s ease",
                }}>Sostenibilidad ambiental</span>
              </div>
            </div>
          </Link>

          {/* Links desktop */}
          <div className="nav-desktop-links">
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

          {/* Botón hamburguesa */}
          <button
            className="hamburger-btn"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            onClick={() => setOpen(o => !o)}
          >
            {/* Tres líneas animadas */}
            <span className={`hb-line hb-line-1 ${open ? "hb-open" : ""}`} style={{ background: open ? COLORS.forest[900] : iconColor }} />
            <span className={`hb-line hb-line-2 ${open ? "hb-open" : ""}`} style={{ background: open ? COLORS.forest[900] : iconColor }} />
            <span className={`hb-line hb-line-3 ${open ? "hb-open" : ""}`} style={{ background: open ? COLORS.forest[900] : iconColor }} />
          </button>
        </div>
      </nav>

      {/* Mobile overlay menu */}
      <div className={`mobile-menu-overlay ${open ? "mobile-menu-open" : ""}`}>
        <div className="mobile-menu-links">
          {links.map((l, i) => (
            <Link
              key={l.id}
              href={l.id}
              className={`mobile-menu-link ${open ? "mobile-menu-link-visible" : ""} ${pathname === l.id ? "mobile-menu-link-active" : ""}`}
              style={{ transitionDelay: open ? `${i * 55}ms` : "0ms" }}
            >
              {l.label}
            </Link>
          ))}
          <div className={`mobile-menu-domain ${open ? "mobile-menu-link-visible" : ""}`} style={{ transitionDelay: open ? `${links.length * 55}ms` : "0ms" }}>
            girsapuebla.org
          </div>
        </div>
      </div>
    </>
  );
}
