import { render } from "@testing-library/react";
import TodoInput from "../components/TodoInput/index";

describe("TodoInput", () => {
  it("matches snapshot", () => {
    const { container } = render(<TodoInput />);
    expect(container).toMatchSnapshot();
  })
})