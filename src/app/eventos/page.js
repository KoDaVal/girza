"use client";

import { Reveal } from "../../components/Reveal";
import { COLORS, fonts, s } from "../../utils/theme";
import { icons } from "../../components/Icons";

export default function Eventos() {
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
            {[
              "/prcFlores.jpeg",
              "/prcRecliclatron2.jpeg",
              "/prcReforestacion2.jpeg",
              "/prclibros2.jpeg",
              "/prcreforestacion.jpeg",
              "/prcrueda-de-prensa.jpeg"
            ].map((imgSrc, i) => (
              <Reveal key={i} delay={i * 60}>
                <div className="hover-lift" style={{
                  aspectRatio: i === 0 || i === 5 ? "1" : "4/3", 
                  borderRadius: 16,
                  backgroundImage: `url(${imgSrc})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  cursor: "pointer",
                  gridRow: i === 0 ? "1 / 3" : "auto",
                }}>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
