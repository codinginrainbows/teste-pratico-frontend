import { render } from "@testing-library/react";
import { Header } from "./index";

describe("Header", () => {
  test("renderiza o logotipo corretamente", () => {
    const { container } = render(<Header />);
    const logoElement = container.querySelector(".logo");

    expect(logoElement).toBeInTheDocument();
    expect(logoElement?.textContent?.replace(/\s/g, "")).toBe("BeTalent");

    const strongElement = container.querySelector("strong");
    expect(strongElement).toBeInTheDocument();
    expect(strongElement?.textContent?.trim()).toBe("Be");
  });
});
