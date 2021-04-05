import React from "react";

import TodoCheckBoxToggle from "../TodoCheckBoxToggle/index";
import "./TodoInput.scss";

const STYLE_BASE: string = "todoInput__";

const TodoInput = (): JSX.Element => {
  return (
    <div className={`${STYLE_BASE}container`}>
      <div className={`${STYLE_BASE}input`}>
        <TodoCheckBoxToggle />
        <input type="text" className={`${STYLE_BASE}todoInput`} placeholder={"Create a new todo..."} />
      </div>
    </div>
  );
};

export default TodoInput;