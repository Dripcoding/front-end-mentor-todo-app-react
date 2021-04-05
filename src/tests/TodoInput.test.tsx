import { render } from "@testing-library/react";
import TodoInput from "../components/TodoInput/index";

describe("TodoInput", () => {
  it("matches snapshot", () => {
    const { container } = render(<TodoInput />);
    expect(container).toMatchSnapshot();
  });

  it("renders correctly", () => {
    const { getByTestId, getByRole } = render(<TodoInput />);

    const todoToggle = getByTestId("TODO_OVAL_TOGGLE");
    expect(todoToggle).toBeInTheDocument();
    expect(todoToggle).toBeVisible();

    const todoInput = getByRole("textbox");
    expect(todoInput).toBeInTheDocument();
    expect(todoInput).toBeVisible();
  });
});