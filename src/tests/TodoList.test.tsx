import { render } from "@testing-library/react";
import TodoList from "../containers/TodoList/index";

describe("TodoList", () => {
  it("should match snapshot", () => {
    const { container } = render(<TodoList />);
    expect(container).toMatchSnapshot();
  });

  it("should render correctly", () => {
    const { getByTestId } = render(<TodoList />);

    const container = getByTestId("TODO_LIST_CONTAINER");
    expect(container).toBeInTheDocument();
    expect(container).toBeVisible();
  });
});