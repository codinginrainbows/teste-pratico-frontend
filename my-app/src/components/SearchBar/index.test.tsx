import { render, screen, fireEvent } from "@testing-library/react";
import { SearchBar } from "./index";

describe("SearchBar", () => {
  test('renderiza o input com placeholder "Pesquisar"', () => {
    const mockOnChange = jest.fn();
    render(<SearchBar value="" onChange={mockOnChange} />);

    const inputElement = screen.getByPlaceholderText("Pesquisar");
    expect(inputElement).toBeInTheDocument();

    const imageElement = screen.getByAltText("lupa");
    expect(imageElement).toBeInTheDocument();
  });

  test("chama a funcao onChange quando o usuário digita no input", () => {
    const mockOnChange = jest.fn();
    render(<SearchBar value="" onChange={mockOnChange} />);

    const inputElement = screen.getByPlaceholderText("Pesquisar");
    fireEvent.change(inputElement, { target: { value: "test" } });

    expect(mockOnChange).toHaveBeenCalledWith("test");
  });
});
