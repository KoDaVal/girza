"use client";

import Link from "next/link";
import { COLORS, fonts, s } from "../utils/theme";
import { GirsaLogo } from "./GirsaLogo";
import { icons } from "./Icons";

export function Footer() {
  return (
    <footer style={{ background: COLORS.forest[900], color: COLORS.neutral.white, padding: "80px 0 40px", position: "relative", overflow: "hidden" }}>
      <div style={{
        position: "absolute", bottom: "-200px", right: "-100px", width: 500, height: 500, borderRadius: "50%",
        background: `radial-gradient(circle, ${COLORS.teal[700]}40 0%, transparent 70%)`, filter: "blur(60px)",
      }} />

      <div className="container" style={{ ...s.container, position: "relative" }}>

        {/* Grid principal */}
        <div className="footer-grid" style={{ marginBottom: 56 }}>
          {/* Brand */}
          <div className="footer-brand">
            <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 20 }}>
              <GirsaLogo size={52} inverse />
              <div style={{ fontFamily: fonts.heading, fontSize: 28, fontWeight: 800 }}>GIRSA</div>
            </div>
            <p style={{ ...s.body, color: COLORS.forest[200], maxWidth: 300, lineHeight: 1.8, fontSize: 15 }}>
              Gestión Integral de Residuos y Sostenibilidad Ambiental. Transformamos residuos en oportunidades reales para las comunidades.
            </p>
          </div>

          {/* Navegación */}
          <div>
            <div style={{ ...s.label, color: COLORS.olive[400], marginBottom: 20 }}>Navegación</div>
            {[["/", "Inicio"], ["/nosotros", "Nosotros"], ["/servicios", "Servicios"], ["/eventos", "Eventos"]].map(([href, label]) => (
              <Link key={href} href={href} style={{ textDecoration: "none" }}>
                <div className="footer-link">{label}</div>
              </Link>
            ))}
          </div>

          {/* Más */}
          <div>
            <div style={{ ...s.label, color: COLORS.olive[400], marginBottom: 20 }}>Más</div>
            {[["/impacto", "Impacto"], ["/transparencia", "Transparencia"], ["/contacto", "Contacto"]].map(([href, label]) => (
              <Link key={href} href={href} style={{ textDecoration: "none" }}>
                <div className="footer-link">{label}</div>
              </Link>
            ))}
          </div>

          {/* Contacto */}
          <div>
            <div style={{ ...s.label, color: COLORS.olive[400], marginBottom: 20 }}>Contacto</div>
            <div style={{ display: "flex", alignItems: "flex-start", gap: 10, color: COLORS.forest[200], marginBottom: 14, fontSize: 14, lineHeight: 1.4 }}>
              {icons.mail}
              <span style={{ wordBreak: "break-all" }}>contacto@girsapuebla.org</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, color: COLORS.forest[200], marginBottom: 14, fontSize: 14 }}>
              {icons.phone} 222-850-8632
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, color: COLORS.forest[200], fontSize: 14 }}>
              {icons.mapPin} Puebla, México
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <span style={{ fontSize: 13, color: COLORS.forest[400] }}>© 2026 GIRSA. Todos los derechos reservados.</span>
          <span style={{ fontSize: 13, color: COLORS.forest[400] }}>Desarrollado por <span style={{ color: COLORS.neutral.white, fontWeight: 600 }}>Efyb</span></span>
        </div>
      </div>
    </footer>
  );
}
