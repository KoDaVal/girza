"use client";

import Link from "next/link";
import { COLORS, fonts, s } from "../utils/theme";
import { GirsaLogo } from "./GirsaLogo";
import { icons } from "./Icons";

export function Footer() {
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
            {[["/", "Inicio"], ["/nosotros", "Nosotros"], ["/servicios", "Servicios"], ["/eventos", "Eventos"]].map(([href, label]) => (
              <Link key={href} href={href} style={{ textDecoration: "none" }}>
                <div style={{ color: COLORS.forest[200], marginBottom: 12, cursor: "pointer", fontSize: 15, transition: "color 0.3s" }}
                  onMouseEnter={e => e.currentTarget.style.color = COLORS.olive[300]}
                  onMouseLeave={e => e.currentTarget.style.color = COLORS.forest[200]}>
                  {label}
                </div>
              </Link>
            ))}
          </div>
          <div>
            <div style={{ ...s.label, color: COLORS.olive[400], marginBottom: 20 }}>Más</div>
            {[["/impacto", "Impacto"], ["/transparencia", "Transparencia"], ["/contacto", "Contacto"]].map(([href, label]) => (
              <Link key={href} href={href} style={{ textDecoration: "none" }}>
                <div style={{ color: COLORS.forest[200], marginBottom: 12, cursor: "pointer", fontSize: 15, transition: "color 0.3s" }}
                  onMouseEnter={e => e.currentTarget.style.color = COLORS.olive[300]}
                  onMouseLeave={e => e.currentTarget.style.color = COLORS.forest[200]}>
                  {label}
                </div>
              </Link>
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
