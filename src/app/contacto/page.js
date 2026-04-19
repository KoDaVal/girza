"use client";

import { Reveal } from "../../components/Reveal";
import { COLORS, fonts, s } from "../../utils/theme";
import { icons } from "../../components/Icons";

export default function Contacto() {
  return (
    <div style={{ paddingTop: 120 }}>
      <section style={{ ...s.section, paddingTop: 60 }}>
        <div style={s.container}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 72 }}>
            <Reveal direction="right">
              <div>
                <div style={{ ...s.label, marginBottom: 16 }}>Contacto</div>
                <h1 style={{ ...s.h1, marginBottom: 28 }}>Hablemos</h1>
                <p style={{ ...s.body, fontSize: 20, marginBottom: 48, lineHeight: 1.7 }}>
                  ¿Quieres organizar un evento, agendar una recolección o colaborar con nosotros? Escríbenos.
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                  {[
                    { icon: icons.mail, label: "Correo", value: "Cruzcruz.luise@gmail.com" },
                    { icon: icons.phone, label: "WhatsApp", value: "222 543 0566" },
                    { icon: icons.mapPin, label: "Ubicación", value: "Puebla, México" },
                  ].map((item, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "center", gap: 18 }}>
                      <div style={{ width: 52, height: 52, borderRadius: 14, background: COLORS.forest[50], display: "flex", alignItems: "center", justifyContent: "center", color: COLORS.forest[700] }}>
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
              <div style={{ ...s.card, padding: 48 }}>
                <h3 style={{ ...s.h3, marginBottom: 28 }}>Envía un mensaje</h3>
                <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }}>
                    <input placeholder="Nombre" style={{ padding: "16px 18px", borderRadius: 10, border: `1px solid ${COLORS.neutral[100]}`, fontSize: 15, fontFamily: fonts.body, outline: "none", transition: "border-color 0.3s" }} />
                    <input placeholder="Organización" style={{ padding: "16px 18px", borderRadius: 10, border: `1px solid ${COLORS.neutral[100]}`, fontSize: 15, fontFamily: fonts.body, outline: "none", transition: "border-color 0.3s" }} />
                  </div>
                  <input placeholder="Correo electrónico" style={{ padding: "16px 18px", borderRadius: 10, border: `1px solid ${COLORS.neutral[100]}`, fontSize: 15, fontFamily: fonts.body, outline: "none", transition: "border-color 0.3s" }} />
                  <select style={{ padding: "16px 18px", borderRadius: 10, border: `1px solid ${COLORS.neutral[100]}`, fontSize: 15, fontFamily: fonts.body, outline: "none", color: COLORS.neutral[300], background: COLORS.neutral.white, transition: "border-color 0.3s" }}>
                    <option>¿En qué podemos ayudarte?</option>
                    <option>Agendar evento de reciclaje</option>
                    <option>Recolección en mi comunidad</option>
                    <option>Colaborar / Donar</option>
                    <option>Información general</option>
                  </select>
                  <textarea placeholder="Tu mensaje..." rows={4} style={{ padding: "16px 18px", borderRadius: 10, border: `1px solid ${COLORS.neutral[100]}`, fontSize: 15, fontFamily: fonts.body, outline: "none", resize: "vertical", transition: "border-color 0.3s" }} />
                  <button className="btn-fx" style={{ ...s.btn, ...s.btnPrimary, justifyContent: "center", padding: "18px" }}>
                    Enviar mensaje {icons.arrowRight}
                  </button>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section style={{ background: COLORS.forest[50], padding: "72px 0" }}>
        <div style={{ ...s.container, display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 24 }}>
          <div>
            <h3 style={{ ...s.h3, fontSize: 30 }}>¿Prefieres escribirnos por WhatsApp?</h3>
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
