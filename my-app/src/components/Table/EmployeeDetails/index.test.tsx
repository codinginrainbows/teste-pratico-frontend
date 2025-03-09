import { render, screen } from "@testing-library/react";
import { EmployeeDetails } from "./index";
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

describe("EmployeeDetails", () => {
  test("renderiza os detalhes corretamente", () => {
    render(<EmployeeDetails employee={employeeMock} />);

    expect(screen.getByText(/Cargo/i)).toBeInTheDocument();
    expect(screen.getByText(/Data de admissão/i)).toBeInTheDocument();
    expect(screen.getByText(/Telefone/i)).toBeInTheDocument();

    expect(screen.getByText(/Back-end/i)).toBeInTheDocument();
    expect(screen.getByText(/02\/12\/2019/i)).toBeInTheDocument();
    expect(screen.getByText("+55 (51) 23456-7890")).toBeInTheDocument();
  });
});
