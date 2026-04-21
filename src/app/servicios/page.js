"use client";

import { Reveal } from "../../components/Reveal";
import { COLORS, s } from "../../utils/theme";
import { icons } from "../../components/Icons";

export default function Servicios() {
  return (
    <div className="page-inner" style={{ paddingTop: 120 }}>
      <section style={{ ...s.section, paddingTop: 60 }}>
        <div className="container" style={s.container}>
          <Reveal>
            <div style={{ ...s.label, marginBottom: 16 }}>Servicios</div>
            <h1 style={{ ...s.h1, marginBottom: 28 }}>Lo que hacemos</h1>
            <p style={{ ...s.body, fontSize: "clamp(16px, 2.5vw, 20px)", maxWidth: 640, marginBottom: 64, lineHeight: 1.7 }}>
              No vendemos productos. Ofrecemos servicios gratuitos de recolección, eventos de reciclaje y dignificación de espacios educativos.
            </p>
          </Reveal>

          {/* Reciclaje */}
          <div className="grid-2-wide" style={{ marginBottom: 72 }}>
            <Reveal direction="right">
              <div>
                <div style={{ display: "inline-flex", padding: "8px 18px", borderRadius: 999, background: COLORS.forest[50], color: COLORS.forest[700], fontSize: 13, fontWeight: 600, marginBottom: 24 }}>
                  Reciclaje
                </div>
                <h2 style={{ ...s.h2, fontSize: "clamp(1.4rem, 3vw, 2.25rem)", marginBottom: 20 }}>Eventos de reciclaje</h2>
                <p style={{ ...s.body, marginBottom: 28, fontSize: 17 }}>Gestionamos reciclatones, recolecciones empresariales y eventos con causa. Organizamos la logística para colonias, juntas auxiliares, parroquias, escuelas o empresas — tú solo nos indicas el lugar.</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                  {["Reciclatones comunitarios", "Recolecciones empresariales", "Eventos con causa", "Cálculo de huella de carbono"].map((item, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      <div style={{ width: 26, height: 26, borderRadius: "50%", background: COLORS.forest[50], display: "flex", alignItems: "center", justifyContent: "center", color: COLORS.forest[700], flexShrink: 0 }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M20 6L9 17l-5-5"/></svg>
                      </div>
                      <span style={{ fontSize: 15, color: COLORS.neutral[500] }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
            <Reveal direction="left">
              <div style={{
                aspectRatio: "4/3", borderRadius: 24,
                backgroundImage: "url(/servicios-reciclaje-Reciclatrom.jpeg)",
                backgroundSize: "cover", backgroundPosition: "center",
                overflow: "hidden", boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
              }} />
            </Reveal>
          </div>

          {/* Dignificaciones */}
          <div className="grid-2-wide">
            <Reveal direction="right">
              <div style={{
                aspectRatio: "4/3", borderRadius: 24,
                backgroundImage: "url(/dignificaciones-Libros.jpeg)",
                backgroundSize: "cover", backgroundPosition: "center",
                overflow: "hidden", boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
              }} />
            </Reveal>
            <Reveal direction="left">
              <div>
                <div style={{ display: "inline-flex", padding: "8px 18px", borderRadius: 999, background: COLORS.teal[50], color: COLORS.teal[700], fontSize: 13, fontWeight: 600, marginBottom: 24 }}>
                  Impacto social
                </div>
                <h2 style={{ ...s.h2, fontSize: "clamp(1.4rem, 3vw, 2.25rem)", marginBottom: 20 }}>Dignificaciones</h2>
                <p style={{ ...s.body, marginBottom: 28, fontSize: 17 }}>Equipamos bibliotecas para niños en zonas rezagadas. Donamos libros y equipos de cómputo para que los niños tengan acceso a información y tecnología.</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                  {["Donación de libros", "Equipos de cómputo", "Dignificación de espacios", "Acceso a tecnología"].map((item, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      <div style={{ width: 26, height: 26, borderRadius: "50%", background: COLORS.teal[50], display: "flex", alignItems: "center", justifyContent: "center", color: COLORS.teal[700], flexShrink: 0 }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M20 6L9 17l-5-5"/></svg>
                      </div>
                      <span style={{ fontSize: 15, color: COLORS.neutral[500] }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
