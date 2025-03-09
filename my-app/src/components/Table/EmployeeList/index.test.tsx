import { render, screen } from "@testing-library/react";
import { EmployeeList } from "./index";
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

describe("EmployeeList", () => {
  test("renderiza o cabeçalho corretamente", () => {
    render(
      <EmployeeList employees={[employeeMock]} isLoadingEmployees={false} />
    );

    expect(screen.getByText(/FOTO/i)).toBeInTheDocument();
    expect(screen.getByText(/NOME/i)).toBeInTheDocument();
    expect(screen.getByText(/CARGO/i)).toBeInTheDocument();
    expect(screen.getByText(/DATA DE ADMISSÃO/i)).toBeInTheDocument();
    expect(screen.getByText(/TELEFONE/i)).toBeInTheDocument();
  });

  test("renderiza mensagem de vazio quando não há funcionários", () => {
    render(<EmployeeList employees={[]} isLoadingEmployees={false} />);
    expect(
      screen.getByText(/Nenhum funcionário encontrado/i)
    ).toBeInTheDocument();
  });
});
