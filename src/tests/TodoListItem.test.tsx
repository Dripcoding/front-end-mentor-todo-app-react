import { render } from "@testing-library/react";
import TodoListItem from "../components/TodoListItem";

describe("TodoListItem", () => {
  it("matches snapshot", () => {
    const { container } = render(<TodoListItem />);
    expect(container).toMatchSnapshot();
  });

  it("renders correctly", () => {
    const { getByTestId } = render(<TodoListItem/>);

    const container = getByTestId("TODO_LIST_ITEM");
    expect(container).toBeInTheDocument();
    expect(container).toBeVisible();
  });
});