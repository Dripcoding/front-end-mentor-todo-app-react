import React from "react";

import "./TodoCheckBoxToggle.scss";

const STYLE_BASE: string = "todoCheckBoxToggle__";

const TodoCheckBoxToggle = (): JSX.Element => {
  return (
    <div
      className={`${STYLE_BASE}container`}
      data-testid={"TODO_CHECKBOX_TOGGLE"}
    >
    </div>
  );
};

export default TodoCheckBoxToggle;