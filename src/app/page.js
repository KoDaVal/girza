"use client";

import Link from "next/link";
import { Reveal } from "../components/Reveal";
import { HeroBackground } from "../components/HeroBackground";
import { COLORS, fonts, s } from "../utils/theme";
import { icons } from "../components/Icons";

export default function Inicio() {
  return (
    <div>
      <section style={{ minHeight: "100vh", display: "flex", alignItems: "center", position: "relative" }}>
        <HeroBackground />
        <div className="container" style={{ ...s.container, position: "relative", zIndex: 2, paddingTop: 140, paddingBottom: 80 }}>
          <div style={{ maxWidth: 780 }}>
            <div className="fade-up-1" style={{ ...s.label, color: COLORS.olive[300], marginBottom: 24 }}>
              Asociación civil · Puebla, México
            </div>
            <h1 className="fade-up-2" style={{ ...s.h1, fontSize: "clamp(2.2rem, 6vw, 4.25rem)", color: COLORS.neutral.white, marginBottom: 28 }}>
              Del residuo nace la <em style={{ fontStyle: "italic", color: COLORS.olive[300], fontWeight: 600 }}>oportunidad</em>
            </h1>
            <p className="fade-up-3" style={{ ...s.body, color: "rgba(255,255,255,0.78)", fontSize: "clamp(16px, 2.5vw, 20px)", maxWidth: 600, marginBottom: 44, lineHeight: 1.7 }}>
              Organizamos reciclatones, gestionamos recolecciones y dignificamos bibliotecas para niños en zonas rezagadas.
            </p>
            <div className="fade-up-4 hero-btns">
              <Link href="/eventos" style={{ textDecoration: "none" }}>
                <button className="btn-fx" style={{ ...s.btn, background: COLORS.olive[600], color: COLORS.neutral.white }}>
                  Próximos eventos {icons.arrowRight}
                </button>
              </Link>
              <Link href="/nosotros" style={{ textDecoration: "none" }}>
                <button className="btn-fx" style={{ ...s.btn, background: "rgba(255,255,255,0.1)", color: COLORS.neutral.white, border: "1.5px solid rgba(255,255,255,0.3)", backdropFilter: "blur(10px)" }}>
                  Conócenos
                </button>
              </Link>
            </div>
          </div>

          <div className="fade-up-5 hero-scroll-hint" style={{
            position: "absolute", bottom: 40, left: "50%", transform: "translateX(-50%)",
            flexDirection: "column", alignItems: "center", gap: 8,
          }}>
            <div style={{ fontSize: 11, color: "rgba(255,255,255,0.5)", letterSpacing: 2, textTransform: "uppercase" }}>Scroll</div>
            <div style={{ width: 1, height: 40, background: "rgba(255,255,255,0.3)", animation: "pulse 2s ease infinite" }} />
          </div>
        </div>
      </section>

      <section style={{ background: COLORS.neutral.white, padding: "80px 0", borderBottom: `1px solid ${COLORS.neutral[100]}` }}>
        <div className="container grid-4" style={{ ...s.container }}>
          {[
            { n: "50", suf: "+", l: "Eventos de reciclaje", c: COLORS.forest[700] },
            { n: "12", suf: "",  l: "Bibliotecas dignificadas", c: COLORS.teal[600] },
            { n: "200", suf: "T", l: "Toneladas recicladas", c: COLORS.olive[600] },
            { n: "30", suf: "+", l: "Aliados activos", c: COLORS.accent.main },
          ].map((stat, i) => (
            <Reveal key={i} delay={i * 100}>
              <div style={{ textAlign: "center" }}>
                <div style={{ fontFamily: fonts.heading, fontSize: "clamp(2.5rem, 6vw, 4rem)", fontWeight: 700, color: stat.c, lineHeight: 1, letterSpacing: "-0.02em" }}>
                  {stat.n}<span style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)" }}>{stat.suf}</span>
                </div>
                <div style={{ fontSize: 14, color: COLORS.neutral[500], marginTop: 10, fontWeight: 500 }}>{stat.l}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section style={{ ...s.section, background: COLORS.neutral[50], overflow: "hidden" }}>
        <div style={{
          position: "absolute", top: "10%", right: "-5%", width: 400, height: 400, borderRadius: "50%",
          background: `radial-gradient(circle, ${COLORS.olive[200]}40 0%, transparent 70%)`, filter: "blur(80px)",
          animation: "blob1 20s ease-in-out infinite",
        }} />
        <div className="container" style={{ ...s.container, position: "relative" }}>
          <Reveal>
            <div style={{ textAlign: "center", marginBottom: 72 }}>
              <div style={{ ...s.label, marginBottom: 16 }}>Lo que hacemos</div>
              <h2 style={s.h2}>Dos misiones, un impacto</h2>
            </div>
          </Reveal>
          <div className="grid-2">
            <Reveal direction="right" delay={100}>
              <Link href="/servicios" style={{ textDecoration: "none" }}>
                <div className="hover-lift card-padded" style={{ ...s.card, padding: 52, cursor: "pointer", height: "100%" }}>
                  <div style={{
                    width: 64, height: 64, borderRadius: 16, background: COLORS.forest[50],
                    display: "flex", alignItems: "center", justifyContent: "center", color: COLORS.forest[700], marginBottom: 28,
                  }}>{icons.recycle}</div>
                  <h3 style={{ ...s.h3, marginBottom: 14 }}>Eventos de reciclaje</h3>
                  <p style={s.body}>Gestionamos reciclatones, recolecciones empresariales y eventos con causa.</p>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 24, color: COLORS.forest[700], fontWeight: 600, fontSize: 15 }}>
                    Conocer más {icons.arrowRight}
                  </div>
                </div>
              </Link>
            </Reveal>
            <Reveal direction="left" delay={200}>
              <Link href="/servicios" style={{ textDecoration: "none" }}>
                <div className="hover-lift card-padded" style={{ ...s.card, padding: 52, cursor: "pointer", height: "100%" }}>
                  <div style={{
                    width: 64, height: 64, borderRadius: 16, background: COLORS.teal[50],
                    display: "flex", alignItems: "center", justifyContent: "center", color: COLORS.teal[700], marginBottom: 28,
                  }}>{icons.book}</div>
                  <h3 style={{ ...s.h3, marginBottom: 14 }}>Dignificaciones</h3>
                  <p style={s.body}>Equipamos bibliotecas para niños en zonas rezagadas con libros y equipos de cómputo, para que tengan acceso a información y tecnología.</p>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 24, color: COLORS.teal[700], fontWeight: 600, fontSize: 15 }}>
                    Conocer más {icons.arrowRight}
                  </div>
                </div>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <section style={{
        background: `linear-gradient(135deg, ${COLORS.forest[900]} 0%, ${COLORS.forest[800]} 50%, ${COLORS.teal[900]} 100%)`,
        backgroundSize: "200% 200%",
        animation: "gradientShift 15s ease infinite",
        padding: "120px 0", position: "relative", overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", top: "-20%", left: "-10%", width: 500, height: 500, borderRadius: "50%",
          background: `radial-gradient(circle, ${COLORS.olive[600]}30 0%, transparent 70%)`,
          filter: "blur(60px)", animation: "blob1 18s ease-in-out infinite",
        }} />
        <div style={{
          position: "absolute", bottom: "-30%", right: "-5%", width: 600, height: 600, borderRadius: "50%",
          background: `radial-gradient(circle, ${COLORS.teal[600]}30 0%, transparent 70%)`,
          filter: "blur(80px)", animation: "blob2 22s ease-in-out infinite",
        }} />
        <div className="container" style={{ ...s.container, textAlign: "center", position: "relative" }}>
          <Reveal>
            <h2 style={{ ...s.h2, color: COLORS.neutral.white, marginBottom: 20, fontSize: "clamp(1.6rem, 4vw, 3rem)" }}>¿Quieres organizar un evento de reciclaje?</h2>
            <p style={{ ...s.body, color: "rgba(255,255,255,0.75)", marginBottom: 40, maxWidth: 620, margin: "0 auto 40px", fontSize: 18 }}>
              Organizamos recolecciones en colonias, juntas auxiliares, parroquias, escuelas o empresas. Nosotros nos encargamos de la logística y tratamiento. Tú solo nos indicas el lugar.
            </p>
            <Link href="/contacto" style={{ textDecoration: "none" }}>
              <button className="btn-fx" style={{ ...s.btn, ...s.btnAccent, fontSize: 16, padding: "18px 40px" }}>
                Agendar evento {icons.arrowRight}
              </button>
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
