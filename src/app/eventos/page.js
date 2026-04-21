"use client";

import { Reveal } from "../../components/Reveal";
import { COLORS, fonts, s } from "../../utils/theme";
import { icons } from "../../components/Icons";

export default function Eventos() {
  const eventos = [
    { date: "15 ABR", title: "Jornada de reciclaje electrónico",   location: "Parque Ecológico, Puebla",   type: "Público" },
    { date: "28 ABR", title: "Recolección empresarial Q2",          location: "Zona industrial, Puebla",    type: "Empresas" },
    { date: "10 MAY", title: "Dignificación Biblioteca Sta. María", location: "Santa María Xonacatepec",   type: "Comunidad" },
    { date: "22 MAY", title: "Feria del reciclaje infantil",        location: "Centro Cultural, Puebla",   type: "Público" },
  ];

  return (
    <div className="page-inner" style={{ paddingTop: 120 }}>
      <section style={{ ...s.section, paddingTop: 60 }}>
        <div className="container" style={s.container}>
          <Reveal>
            <div style={{ ...s.label, marginBottom: 16 }}>Eventos</div>
            <h1 style={{ ...s.h1, marginBottom: 28 }}>Próximos eventos</h1>
            <p style={{ ...s.body, fontSize: "clamp(16px, 2.5vw, 20px)", maxWidth: 640, marginBottom: 64, lineHeight: 1.7 }}>
              Regístrate o agenda un evento de reciclaje con nosotros. La participación es completamente gratuita.
            </p>
          </Reveal>

          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            {eventos.map((ev, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="hover-lift card-padded evento-card" style={{ ...s.card, padding: "28px 32px", cursor: "pointer" }}>
                  {/* Fecha */}
                  <div style={{ textAlign: "center", minWidth: 64, flexShrink: 0 }}>
                    <div style={{ fontFamily: fonts.heading, fontSize: "clamp(1.5rem, 4vw, 2rem)", fontWeight: 700, color: COLORS.forest[700], lineHeight: 1 }}>
                      {ev.date.split(" ")[0]}
                    </div>
                    <div style={{ fontSize: 12, fontWeight: 700, color: COLORS.olive[600], letterSpacing: 1.5 }}>
                      {ev.date.split(" ")[1]}
                    </div>
                  </div>

                  {/* Separador vertical (oculto en móvil via clase) */}
                  <div className="evento-separator" style={{ background: COLORS.neutral[100] }} />

                  {/* Info */}
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <h3 style={{ ...s.h3, fontSize: "clamp(1rem, 2.5vw, 1.3rem)", marginBottom: 6 }}>{ev.title}</h3>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, color: COLORS.neutral[300], fontSize: 14, flexWrap: "wrap" }}>
                      {icons.mapPin} {ev.location}
                    </div>
                  </div>

                  {/* Badge + botón */}
                  <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap", flexShrink: 0 }}>
                    <div style={{
                      display: "inline-flex", padding: "6px 14px", borderRadius: 999,
                      background: ev.type === "Empresas" ? COLORS.teal[50] : ev.type === "Comunidad" ? COLORS.accent.bg : COLORS.forest[50],
                      color: ev.type === "Empresas" ? COLORS.teal[700] : ev.type === "Comunidad" ? COLORS.accent.main : COLORS.forest[700],
                      fontSize: 12, fontWeight: 600,
                    }}>{ev.type}</div>
                    <button className="btn-fx" style={{ ...s.btn, ...s.btnPrimary, padding: "10px 20px", fontSize: 13 }}>Registrarse</button>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section style={{ ...s.section, background: COLORS.neutral[50] }}>
        <div className="container" style={s.container}>
          <Reveal>
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <div style={{ ...s.label, marginBottom: 14 }}>Galería</div>
              <h2 style={s.h2}>Proyectos concluidos</h2>
            </div>
          </Reveal>
          <div className="grid-gallery">
            {[
              "/prcFlores.jpeg",
              "/prcRecliclatron2.jpeg",
              "/prcReforestacion2.jpeg",
              "/prclibros2.jpeg",
              "/prcreforestacion.jpeg",
              "/prcrueda-de-prensa.jpeg",
            ].map((imgSrc, i) => (
              <Reveal key={i} delay={i * 60}>
                <div className="hover-lift" style={{
                  aspectRatio: "4/3",
                  borderRadius: 16,
                  backgroundImage: `url(${imgSrc})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  cursor: "pointer",
                  gridRow: i === 0 ? "1 / 3" : "auto",
                }} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
