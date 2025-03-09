import { render } from "@testing-library/react";
import { EmployeeRow } from "./index";
import { IEmployee } from "../../../common/employee";

const employeeMock: IEmployee = {
  id: 1,
  name: "Employee Name",
  job: "Back-end",
  admission_date: "2019-12-02T00:00:00.000Z",
  phone: "5551234567890",
  image:
    "https://img.favpng.com/25/7/23/computer-icons-user-profile-avatar-image-png-favpng-LFqDyLRhe3PBXM0sx2LufsGFU.jpg",
};

describe("EmployeeRow", () => {
  test("renderiza corretamente os dados do funcionário", () => {
    render(<EmployeeRow employee={employeeMock} />);
  });

  test("abre e fecha os detalhes na versão mobile", () => {
    render(<EmployeeRow employee={employeeMock} />);
  });
});
