import { IEmployee } from "./employee";

export const EMPLOYEE_SEARCHABLE_FIELDS: (keyof IEmployee)[] = [
  "name",
  "job",
  "phone",
];
