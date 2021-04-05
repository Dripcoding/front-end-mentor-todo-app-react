import React, { useState } from "react";

import TodoCheckBoxToggle from "../TodoCheckBoxToggle/index";
import "./TodoInput.scss";

const STYLE_BASE: string = "todoInput__";

const TodoInput = (): JSX.Element => {
  const [text, setText] = useState<string>("");
  // todo: connect to todo context

  const handleChange = (e: React.BaseSyntheticEvent): void => {
    setText(e.target.value);
  };

  const createTodo = (e: React.BaseSyntheticEvent): void => {

  }

  return (
    <div className={`${STYLE_BASE}container`}>
      <div className={`${STYLE_BASE}input`}>
        <TodoCheckBoxToggle />
        <input
          type="text"
          className={`${STYLE_BASE}todoInput`}
          onChange={handleChange}
          placeholder={"Create a new todo..."}
          value={text}
        />
      </div>
    </div>
  );
};

export default TodoInput;