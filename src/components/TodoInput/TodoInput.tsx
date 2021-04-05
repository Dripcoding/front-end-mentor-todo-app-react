import React from "react";

import "./TodoInput.scss";

const STYLE_BASE: string = "todoInput__";

const TodoOvalToggle = (): JSX.Element => {
  return (
    <div className={"todoOvalToggle__todoOvalToggleContainer"} data-testid={"TODO_OVAL_TOGGLE"}>
    </div>
  );
};

const TodoInput = (): JSX.Element => {
  return (
    <div className={`${STYLE_BASE}todoInputContainer`}>
      <div className={`${STYLE_BASE}todoInput`}>
        <TodoOvalToggle />
        <input type="text" className={`${STYLE_BASE}todoInput`} placeholder={"Create a new todo..."} />
      </div>
    </div>
  );
};

export default TodoInput;