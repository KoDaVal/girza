export function parseEventsCSV(csvText) {
  if (!csvText || csvText.trim() === "") return [];
  
  const lines = csvText.trim().split(/\r\n|\n/);
  if (lines.length === 0) return [];

  const firstLine = lines[0];
  const separator = firstLine.includes(",") ? "," : ";";
  const headers = firstLine
    .split(separator)
    .map((h) => h.trim().toLowerCase().replace(/^"|"$/g, ""));

  const events = [];

  for (let i = 1; i < lines.length; i++) {
    const currentLine = lines[i];
    if (!currentLine.trim()) continue;

    const values = [];
    let inQuotes = false;
    let currentValue = "";

    for (const char of currentLine) {
      if (char === '"') {
        inQuotes = !inQuotes;
      } else if (char === separator && !inQuotes) {
        values.push(currentValue.replace(/^"|"$/g, "").trim());
        currentValue = "";
      } else {
        currentValue += char;
      }
    }
    values.push(currentValue.replace(/^"|"$/g, "").trim());

    if (values.length < 2) continue;

    const obj = {};
    headers.forEach((header, index) => {
      if (values[index]) {
        // Map headers to internal keys if needed, 
        // but here we expect fecha, titulo, ubicacion, tipo
        const keyMap = {
          fecha: "date",
          titulo: "title",
          ubicacion: "location",
          tipo: "type"
        };
        const mappedKey = keyMap[header] || header;
        obj[mappedKey] = values[index];
      }
    });

    if (obj.title && obj.date) {
      events.push(obj);
    }
  }

  return events;
}
