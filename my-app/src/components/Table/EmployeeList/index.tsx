import { EmployeeRow } from "../EmployeeRow";
import { IEmployee } from "../../../common/employee";
import circleIcon from "../../../assets/icons/circle.svg";
import styles from "./styles.module.css";
import { TABLE_CELLS } from "../../../common/tableCell";

interface EmployeeListProps {
  employees: IEmployee[];
  isLoadingEmployees: boolean;
}

export const EmployeeList = ({
  employees,
  isLoadingEmployees,
}: EmployeeListProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.desktopHeader}>
        {TABLE_CELLS.map((cell, index) => (
          <div key={index} className={styles[`${cell.style}`]}>
            {cell.header}
          </div>
        ))}
        <img src={circleIcon} alt="Círculo" className={styles.circleIcon} />
      </div>

      {!isLoadingEmployees && employees.length === 0 && <EmployeeRow isEmpty />}

      {employees.map((emp) => (
        <EmployeeRow key={emp.id} employee={emp} />
      ))}
    </div>
  );
};
