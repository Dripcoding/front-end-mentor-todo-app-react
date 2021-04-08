import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TodoInput from "../components/TodoInput/index";

describe("TodoInput", () => {
  it("matches snapshot", () => {
    const { container } = render(<TodoInput />);
    expect(container).toMatchSnapshot();
  });

  it("renders correctly", () => {
    const { getByTestId, getByRole, getByPlaceholderText } = render(<TodoInput />);

    const todoToggle = getByTestId("TODO_CHECKBOX_TOGGLE");
    expect(todoToggle).toBeInTheDocument();
    expect(todoToggle).toBeVisible();

    const todoInput = getByRole("textbox");
    expect(todoInput).toBeInTheDocument();
    expect(todoInput).toBeVisible();
    expect(todoInput).toHaveValue("");

    const todoInputPlaceholder = getByPlaceholderText("Create a new todo...");
    expect(todoInputPlaceholder).toBeInTheDocument();
    expect(todoInputPlaceholder).toBeVisible();
  });

  it("captures todo text correctly", () => {
    const { getByRole } = render(<TodoInput />);

    const sampleInput = "cook dinner";
    const todoInput = getByRole("textbox");
    userEvent.type(todoInput, sampleInput);

    expect(todoInput).toHaveValue(sampleInput);
  });

  it("resets when a todo is submitted", () => {
    const { getByRole } = render(<TodoInput />);

    const sampleInput = "finish homework";
    const todoInput = getByRole("textbox");
    userEvent.type(todoInput, sampleInput + "{enter}");

    expect(todoInput).toHaveValue("");
  });
});