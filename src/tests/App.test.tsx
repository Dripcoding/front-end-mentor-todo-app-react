import { render } from "@testing-library/react";
import App from "../containers/App/App";
import userEvent from "@testing-library/user-event";

describe("App", () => {
  it("matches snapshot", () => {
    const { container } = render(<App />);
    expect(container).toMatchSnapshot();
  });

  it("creates a todo", () => {
    const { getByTestId, getAllByText, getByText, getAllByDisplayValue, getByDisplayValue } = render(<App />);

    const sampleInput = "finish homework";
    const todoInput = getByTestId("TODO_INPUT");

    expect(todoInput).toBeInTheDocument();

    userEvent.type(todoInput, sampleInput + "{enter}");

    const todoItem = getByDisplayValue("finish homework");

    expect(todoItem).toBeInTheDocument();
  });
});
