"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { COLORS, fonts, s } from "../utils/theme";
import { GirsaLogo } from "./GirsaLogo";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
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
    fn(); // Check initial scroll
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const onHeroHome = pathname === "/" && !scrolled;

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
        <Link href="/" style={{ textDecoration: "none" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14, cursor: "pointer" }}>
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
        </Link>

        <div style={{ display: "flex", gap: 4, alignItems: "center" }}>
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
      </div>
    </nav>
  );
}
