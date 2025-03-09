import { useState, useMemo } from "react";
import { IEmployee } from "../common/employee";
import { EMPLOYEE_SEARCHABLE_FIELDS } from "../common/searchFields";

export function useFilterEmployees(employees: IEmployee[]) {
  const [search, setSearch] = useState("");

  const filteredEmployees = useMemo(() => {
    if (!search) return employees;

    const lowerSearch = search.toLowerCase();

    return employees.filter((emp: IEmployee) =>
      EMPLOYEE_SEARCHABLE_FIELDS.some((field) =>
        String(emp[field] ?? "")
          .toLowerCase()
          .includes(lowerSearch)
      )
    );
  }, [search, employees]);

  return {
    search,
    setSearch,
    filteredEmployees,
  };
}
