export const COLORS = {
  forest: { 900: "#1B3C2D", 800: "#1F4535", 700: "#264D3A", 600: "#2D5E45", 500: "#3A7A59", 400: "#5A9E7A", 300: "#72B58E", 200: "#8DC4A3", 100: "#B3D9C0", 50: "#D0EADB" },
  olive: { 900: "#3D4A1E", 700: "#566A2B", 600: "#6E8838", 500: "#889E4C", 400: "#A4B86E", 300: "#B8CA8A", 200: "#C5D49E", 50: "#E8EFD4" },
  teal: { 900: "#1C4A55", 700: "#2A6575", 600: "#3D8494", 500: "#5199A8", 400: "#72B3C0", 300: "#8BC0CB", 200: "#A3D2DB", 50: "#DBF0F4" },
  accent: { main: "#C4742B", light: "#E8923A", bg: "#FBE8CF" },
  neutral: { 900: "#1A1A1A", 700: "#333333", 500: "#4A4A4A", 300: "#999999", 100: "#E8E8E4", 50: "#F5F5F0", white: "#FFFFFF" }
};

export const fonts = {
  heading: "'Playfair Display', Georgia, serif",
  body: "'Plus Jakarta Sans', 'Segoe UI', sans-serif"
};

export const s = {
  page: { fontFamily: fonts.body, color: COLORS.neutral[900], background: COLORS.neutral.white, minHeight: "100vh", overflowX: "hidden" },
  container: { maxWidth: 1240, margin: "0 auto", padding: "0 24px" },
  h1: { fontFamily: fonts.heading, fontSize: 56, fontWeight: 700, lineHeight: 1.05, color: COLORS.forest[900], margin: 0, letterSpacing: "-0.02em" },
  h2: { fontFamily: fonts.heading, fontSize: 42, fontWeight: 700, lineHeight: 1.1, color: COLORS.forest[900], margin: 0, letterSpacing: "-0.01em" },
  h3: { fontFamily: fonts.heading, fontSize: 26, fontWeight: 600, lineHeight: 1.25, color: COLORS.forest[900], margin: 0 },
  body: { fontSize: 16, lineHeight: 1.75, color: COLORS.neutral[500], margin: 0 },
  label: { fontSize: 12, fontWeight: 700, letterSpacing: 2.5, textTransform: "uppercase", color: COLORS.olive[600] },
  btn: { display: "inline-flex", alignItems: "center", gap: 10, padding: "16px 32px", borderRadius: 999, border: "none", cursor: "pointer", fontSize: 15, fontWeight: 600, fontFamily: fonts.body },
  btnPrimary: { background: COLORS.forest[700], color: COLORS.neutral.white },
  btnAccent: { background: COLORS.accent.main, color: COLORS.neutral.white },
  card: { background: COLORS.neutral.white, borderRadius: 20, overflow: "hidden", border: `1px solid ${COLORS.neutral[100]}` },
  section: { padding: "120px 0", position: "relative" },
};
