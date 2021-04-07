import { render } from "@testing-library/react";
import TodoListItem from "../components/TodoListItem";
import { ITodo } from "../context/TodoContext";

const todo: ITodo = {
  id: 10,
  text: "example",
  active: false
}

describe("TodoListItem", () => {
  it("matches snapshot", () => {
    const { container } = render(<TodoListItem todo={todo} />);
    expect(container).toMatchSnapshot();
  });

  it("renders correctly", () => {
    const { getByTestId, getByRole } = render(<TodoListItem todo={todo} />);

    const container = getByTestId("TODO_LIST_ITEM");
    expect(container).toBeInTheDocument();
    expect(container).toBeVisible();

    const todoToggle = getByTestId("TODO_CHECKBOX_TOGGLE");
    expect(todoToggle).toBeInTheDocument();
    expect(todoToggle).toBeVisible();

    const todoListItemInput = getByRole("textbox");
    expect(todoListItemInput).toBeInTheDocument();
    expect(todoListItemInput).toBeVisible();
    expect(todoListItemInput).toHaveValue("");
  });
});