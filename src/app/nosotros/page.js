"use client";

import { Reveal } from "../../components/Reveal";
import { COLORS, s } from "../../utils/theme";

export default function Nosotros() {
  return (
    <div className="page-inner" style={{ paddingTop: 120 }}>
      <section style={{ ...s.section, paddingTop: 60 }}>
        <div className="container" style={s.container}>
          <Reveal>
            <div style={{ ...s.label, marginBottom: 16 }}>Quiénes somos</div>
            <h1 style={{ ...s.h1, marginBottom: 28, maxWidth: 900 }}>Gestión Integral de Residuos y Sostenibilidad Ambiental</h1>
            <p style={{ ...s.body, fontSize: "clamp(16px, 2.5vw, 20px)", maxWidth: 720, marginBottom: 64, lineHeight: 1.7 }}>
              Somos una asociación civil enfocada en brindar soluciones de logística, gestión y tratamiento de residuos reciclables. Nuestro motor es crear impacto ambiental y social real en Puebla.
            </p>
          </Reveal>

          <div className="grid-3">
            {[
              {
                title: "Misión",
                text: "Brindar soluciones integrales de reciclaje y gestión de residuos, mientras dignificamos espacios educativos para niños en zonas vulnerables.",
                color: COLORS.forest,
                icon: (
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                  </svg>
                ),
              },
              {
                title: "Visión",
                text: "Ser la asociación civil referente en Puebla en gestión de residuos y desarrollo comunitario a través de la educación y la tecnología.",
                color: COLORS.teal,
                icon: (
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/>
                    <line x1="6" y1="20" x2="6" y2="14"/>
                  </svg>
                ),
              },
              {
                title: "Valores",
                text: "Compromiso ambiental, impacto social real, transparencia en cada acción y cercanía con las comunidades que servimos.",
                color: COLORS.olive,
                icon: (
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                  </svg>
                ),
              },
            ].map((item, i) => (
              <Reveal key={i} delay={i * 120}>
                <div className="hover-lift card-padded" style={{ ...s.card, padding: 40, height: "100%" }}>
                  <div style={{
                    width: 56, height: 56, borderRadius: 14, background: item.color[50],
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: item.color[700], marginBottom: 24,
                  }}>{item.icon}</div>
                  <h3 style={{ ...s.h3, marginBottom: 12 }}>{item.title}</h3>
                  <p style={s.body}>{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
