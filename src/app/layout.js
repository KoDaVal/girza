import "./globals.css";
import { s } from "../utils/theme";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { WhatsAppButton } from "../components/WhatsAppButton";

export const metadata = {
  title: "GIRSA - Gestión Integral de Residuos y Sostenibilidad Ambiental",
  description: "Asociación civil enfocada en brindar soluciones de logística, gestión y tratamiento de residuos reciclables en Puebla.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body style={{ ...s.page, margin: 0, padding: 0 }}>
        <Navbar />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
