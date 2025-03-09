export function formatDate(isoDate: string): string {
  if (!isoDate) return "";

  const dateObj = new Date(isoDate);
  if (isNaN(dateObj.getTime())) {
    return isoDate;
  }

  return dateObj.toLocaleDateString("pt-BR", {
    timeZone: "UTC",
  });
}
