import { render } from "@testing-library/react";
import Title from "../components/Title/index";


describe("Title", () => {
  it("matches snapshot", () => {
    const { container } = render(<Title />);
    expect(container).toMatchSnapshot();
  });

  it("renders correctly", () => {
    const { getByRole, getByTestId } = render(<Title />);

    const todoHeader = getByRole("heading");
    expect(todoHeader).toBeInTheDocument();
    expect(todoHeader).toBeVisible();

    const sunIcon = getByTestId("SUN-TOGGLE-ICON");
    expect(sunIcon).toBeInTheDocument();
    expect(sunIcon).toBeVisible();
  });
});