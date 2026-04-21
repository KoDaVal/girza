"use client";

import { Reveal } from "../../components/Reveal";
import { COLORS, fonts, s } from "../../utils/theme";
import { icons } from "../../components/Icons";

export default function Transparencia() {
  return (
    <div className="page-inner" style={{ paddingTop: 120 }}>
      <section style={{ ...s.section, paddingTop: 60 }}>
        <div className="container" style={s.container}>
          <Reveal>
            <div style={{ ...s.label, marginBottom: 16 }}>Transparencia</div>
            <h1 style={{ ...s.h1, marginBottom: 28 }}>Canal de transparencia</h1>
            <p style={{ ...s.body, fontSize: "clamp(16px, 2.5vw, 20px)", maxWidth: 640, marginBottom: 72, lineHeight: 1.7 }}>
              Nos comprometemos con la rendición de cuentas. Aquí puedes consultar nuestros informes y reportar cualquier irregularidad.
            </p>
          </Reveal>

          <div className="grid-2">
            <Reveal direction="right">
              <div className="hover-lift card-padded" style={{ ...s.card, padding: 44, height: "100%" }}>
                <div style={{ width: 56, height: 56, borderRadius: 14, background: COLORS.teal[50], display: "flex", alignItems: "center", justifyContent: "center", color: COLORS.teal[700], marginBottom: 24 }}>
                  {icons.file}
                </div>
                <h3 style={{ ...s.h3, marginBottom: 14 }}>Informes y rendición de cuentas</h3>
                <p style={{ ...s.body, marginBottom: 28 }}>Consulta nuestros reportes financieros, informes de actividades y resultados de impacto.</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {["Informe anual 2025", "Reporte financiero Q4 2025", "Informe de impacto 2025"].map((doc, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "center", gap: 12, padding: "14px 18px", borderRadius: 12, background: COLORS.neutral[50], cursor: "pointer", transition: "all 0.3s" }}>
                      {icons.file}
                      <span style={{ fontSize: 15, fontWeight: 500, color: COLORS.forest[900] }}>{doc}</span>
                      <span style={{ marginLeft: "auto", fontSize: 12, color: COLORS.neutral[300], fontWeight: 600, letterSpacing: 1 }}>PDF</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal direction="left">
              <div className="hover-lift card-padded" style={{ ...s.card, padding: 44, height: "100%" }}>
                <div style={{ width: 56, height: 56, borderRadius: 14, background: COLORS.accent.bg, display: "flex", alignItems: "center", justifyContent: "center", color: COLORS.accent.main, marginBottom: 24 }}>
                  {icons.shield}
                </div>
                <h3 style={{ ...s.h3, marginBottom: 14 }}>Buzón de sugerencias</h3>
                <p style={{ ...s.body, marginBottom: 28 }}>Reporta cualquier irregularidad de forma anónima y segura. Tu identidad está protegida.</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                  <input className="form-input" placeholder="Asunto" />
                  <textarea className="form-input" placeholder="Describe la situación..." rows={4} style={{ resize: "vertical" }} />
                  <button className="btn-fx" style={{ ...s.btn, ...s.btnPrimary, justifyContent: "center", width: "100%" }}>
                    Enviar reporte anónimo
                  </button>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
