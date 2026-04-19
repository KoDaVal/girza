"use client";

import { Reveal } from "../../components/Reveal";
import { COLORS, fonts, s } from "../../utils/theme";
import { icons } from "../../components/Icons";

export default function Nosotros() {
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
