"use client";

import { Reveal } from "../../components/Reveal";
import { COLORS, fonts, s } from "../../utils/theme";
import { icons } from "../../components/Icons";

export default function Impacto() {
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
