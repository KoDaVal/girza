"use client";

import { Reveal } from "../../components/Reveal";
import { COLORS, fonts, s } from "../../utils/theme";
import { icons } from "../../components/Icons";

export default function Contacto() {
  return (
    <div className="page-inner" style={{ paddingTop: 120 }}>
      <section style={{ ...s.section, paddingTop: 60 }}>
        <div className="container" style={s.container}>
          <div className="grid-2" style={{ gap: 56 }}>
            <Reveal direction="right">
              <div>
                <div style={{ ...s.label, marginBottom: 16 }}>Contacto</div>
                <h1 style={{ ...s.h1, marginBottom: 28 }}>Hablemos</h1>
                <p style={{ ...s.body, fontSize: "clamp(16px, 2.5vw, 20px)", marginBottom: 48, lineHeight: 1.7 }}>
                  ¿Quieres organizar un evento, agendar una recolección o colaborar con nosotros? Escríbenos.
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                  {[
                    { icon: icons.mail,   label: "Correo",    value: "Cruzcruz.luise@gmail.com" },
                    { icon: icons.phone,  label: "WhatsApp",  value: "222 543 0566" },
                    { icon: icons.mapPin, label: "Ubicación", value: "Puebla, México" },
                  ].map((item, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "center", gap: 18 }}>
                      <div style={{ width: 52, height: 52, borderRadius: 14, background: COLORS.forest[50], display: "flex", alignItems: "center", justifyContent: "center", color: COLORS.forest[700], flexShrink: 0 }}>
                        {item.icon}
                      </div>
                      <div>
                        <div style={{ fontSize: 13, color: COLORS.neutral[300], marginBottom: 2 }}>{item.label}</div>
                        <div style={{ fontSize: 16, fontWeight: 500, color: COLORS.forest[900] }}>{item.value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal direction="left">
              <div className="card-padded" style={{ ...s.card, padding: 40 }}>
                <h3 style={{ ...s.h3, marginBottom: 28 }}>Envía un mensaje</h3>
                <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                  <div className="input-row">
                    <input className="form-input" placeholder="Nombre" />
                    <input className="form-input" placeholder="Organización" />
                  </div>
                  <input className="form-input" placeholder="Correo electrónico" />
                  <select className="form-input" style={{ color: COLORS.neutral[500] }}>
                    <option>¿En qué podemos ayudarte?</option>
                    <option>Agendar evento de reciclaje</option>
                    <option>Recolección en mi comunidad</option>
                    <option>Colaborar / Donar</option>
                    <option>Información general</option>
                  </select>
                  <textarea className="form-input" placeholder="Tu mensaje..." rows={4} style={{ resize: "vertical" }} />
                  <button className="btn-fx" style={{ ...s.btn, ...s.btnPrimary, justifyContent: "center", padding: "18px", width: "100%" }}>
                    Enviar mensaje {icons.arrowRight}
                  </button>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section style={{ background: COLORS.forest[50], padding: "72px 0" }}>
        <div className="container whatsapp-cta" style={{ ...s.container, display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 24 }}>
          <div>
            <h3 style={{ ...s.h3, fontSize: "clamp(1.1rem, 3vw, 1.875rem)" }}>¿Prefieres escribirnos por WhatsApp?</h3>
            <p style={{ ...s.body, marginTop: 6 }}>Respuesta inmediata en horario de oficina.</p>
          </div>
          <a href="https://wa.me/522225430566" target="_blank" rel="noopener noreferrer" className="btn-fx" style={{ ...s.btn, background: "#25D366", color: "#fff", textDecoration: "none", fontSize: 16, padding: "18px 36px" }}>
            {icons.whatsapp} Abrir WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}
