export interface ITableCell {
  header: string;
  style: string;
}

export const TABLE_CELLS: ITableCell[] = [
  { header: "FOTO", style: "Photo" },
  { header: "NOME", style: "Name" },
  { header: "CARGO", style: "Job" },
  { header: "DATA DE ADMISSÃO", style: "Date" },
  { header: "TELEFONE", style: "Phone" },
];
