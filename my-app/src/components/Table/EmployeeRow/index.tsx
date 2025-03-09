import { useState } from "react";
import styles from "./styles.module.css";
import { IEmployee } from "../../../common/employee";
import { formatDate } from "../../../utils/dateFormatter";
import { formatPhone } from "../../../utils/phoneFormatter";

import arrowUpIcon from "../../../assets/icons/arrow_up.svg";
import arrowDownIcon from "../../../assets/icons/arrow_down.svg";

import { EmployeeDetails } from "../EmployeeDetails";
import { useHandleResize } from "../../../hooks/useHandleResize";

interface EmployeeRowProps {
  employee?: IEmployee;
  isEmpty?: boolean;
}

export const EmployeeRow = ({ employee, isEmpty }: EmployeeRowProps) => {
  if (isEmpty) {
    return (
      <div className={styles.rowContainer}>
        <div className={styles.emptyMessage}>
          Nenhum funcionário encontrado.
        </div>
      </div>
    );
  }

  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen(!isOpen);
  useHandleResize(setIsOpen);

  return (
    <div className={styles.rowContainer}>
      <div className={styles.desktopRow}>
        <div className={styles.cellPhoto}>
          <img src={employee?.image} alt={employee?.name} />
        </div>
        <div className={styles.cellName}>{employee?.name}</div>
        <div className={styles.cellRole}>{employee?.job}</div>
        <div className={styles.cellDate}>
          {employee && formatDate(employee.admission_date)}
        </div>
        <div className={styles.cellPhone}>
          {employee && formatPhone(employee.phone)}
        </div>
      </div>

      <div className={styles.mobileHeader} onClick={toggleOpen}>
        <div className={styles.mobileLeft}>
          <img src={employee?.image} alt={employee?.name} />
          <span>{employee?.name}</span>
        </div>
        <div className={styles.mobileRight}>
          <img
            src={isOpen ? arrowUpIcon : arrowDownIcon}
            alt={isOpen ? "Fechar detalhes" : "Abrir detalhes"}
            className={styles.arrowIcon}
          />
        </div>
      </div>

      {isOpen && (
        <div className={styles.mobileDetails}>
          <EmployeeDetails employee={employee} />
        </div>
      )}
    </div>
  );
};
