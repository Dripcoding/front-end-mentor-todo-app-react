import React from "react";

import "./TodoCheckBoxToggle.scss";

interface ITodoCheckBoxToggle {
  disabled: boolean;
}

const STYLE_BASE: string = "todoCheckBoxToggle__";

const TodoCheckBoxToggle = ({ disabled = true }: ITodoCheckBoxToggle): JSX.Element => {
  return (
    <div
      className={`${STYLE_BASE}container`}
      data-testid={"TODO_CHECKBOX_TOGGLE"}
    >
    </div>
  );
};

export default TodoCheckBoxToggle;