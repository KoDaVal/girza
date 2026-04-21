import "./globals.css";
import { s } from "../utils/theme";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { WhatsAppButton } from "../components/WhatsAppButton";

export const metadata = {
  metadataBase: new URL("https://girsapuebla.org"),
  title: {
    default: "GIRSA Puebla – Gestión Integral de Residuos y Sostenibilidad Ambiental",
    template: "%s | GIRSA Puebla",
  },
  description:
    "Asociación civil en Puebla enfocada en reciclatones, gestión de residuos y dignificación de bibliotecas infantiles en zonas rezagadas.",
  keywords: [
    "reciclaje Puebla",
    "reciclatón",
    "gestión de residuos",
    "sostenibilidad ambiental",
    "GIRSA Puebla",
    "biblioteca infantil",
    "asociación civil Puebla",
  ],
  authors: [{ name: "GIRSA Puebla", url: "https://girsapuebla.org" }],
  creator: "GIRSA Puebla",
  publisher: "GIRSA Puebla",
  alternates: { canonical: "https://girsapuebla.org" },
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: "https://girsapuebla.org",
    siteName: "GIRSA Puebla",
    title: "GIRSA Puebla – Gestión Integral de Residuos",
    description:
      "Organizamos reciclatones, gestionamos recolecciones y dignificamos bibliotecas para niños en Puebla.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "GIRSA Puebla" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "GIRSA Puebla – Sostenibilidad Ambiental",
    description: "Reciclatones y dignificaciones de bibliotecas en Puebla, México.",
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true },
  viewport: { width: "device-width", initialScale: 1 },
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
