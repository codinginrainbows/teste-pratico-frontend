import styles from "./styles.module.css";
import { IEmployee } from "../../../common/employee";
import { formatDate } from "../../../utils/dateFormatter";
import { formatPhone } from "../../../utils/phoneFormatter";

interface EmployeeDetailsProps {
  employee?: IEmployee;
}

export const EmployeeDetails = ({ employee }: EmployeeDetailsProps) => {
  if (!employee) return null;

  return (
    <div className={styles.details}>
      <div className={styles.row}>
        <span className={styles.label}>Cargo</span>
        <span>{employee.job}</span>
      </div>
      <div className={styles.row}>
        <span className={styles.label}>Data de admissão</span>
        <span>{formatDate(employee.admission_date)}</span>
      </div>
      <div className={styles.row}>
        <span className={styles.label}>Telefone</span>
        <span>{formatPhone(employee.phone)}</span>
      </div>
    </div>
  );
};
