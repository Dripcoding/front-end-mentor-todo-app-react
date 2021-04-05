import { render } from "@testing-library/react";
import TodoCheckBoxToggle from "../components/TodoCheckBoxToggle";

describe("TodoCheckBoxToggle", () => {
  it("matches snapshot", () => {
    const { container } = render(<TodoCheckBoxToggle />);
    expect(container).toMatchSnapshot();
  });

  it("render correctly", () => {
    const { getByTestId } = render(<TodoCheckBoxToggle />);

    const container = getByTestId("TODO_CHECKBOX_TOGGLE");
    expect(container).toBeInTheDocument();
    expect(container).toBeVisible();
  });
});