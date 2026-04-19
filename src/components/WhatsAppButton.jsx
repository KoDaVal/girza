"use client";

import { icons } from "./Icons";

export function WhatsAppButton() {
  return (
    <>
      <style>{`
        @keyframes waPulse {
          0% { box-shadow: 0 4px 20px rgba(37,211,102,0.4), 0 0 0 0 rgba(37,211,102,0.6); }
          70% { box-shadow: 0 4px 20px rgba(37,211,102,0.4), 0 0 0 18px rgba(37,211,102,0); }
          100% { box-shadow: 0 4px 20px rgba(37,211,102,0.4), 0 0 0 0 rgba(37,211,102,0); }
        }
      `}</style>
      <a href="https://wa.me/522225430566" target="_blank" rel="noopener noreferrer"
        style={{
          position: "fixed", bottom: 28, right: 28, zIndex: 999, width: 62, height: 62, borderRadius: "50%",
          background: "#25D366", display: "flex", alignItems: "center", justifyContent: "center",
          color: "#fff", cursor: "pointer",
          animation: "waPulse 2.5s infinite",
          transition: "transform 0.3s ease",
        }}
        onMouseEnter={e => e.currentTarget.style.transform = "scale(1.1)"}
        onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}>
        {icons.whatsapp}
      </a>
    </>
  );
}
