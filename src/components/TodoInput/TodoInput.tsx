import React, { useContext, useState } from "react";

import TodoCheckBoxToggle from "../TodoCheckBoxToggle/index";
import "./TodoInput.scss";
import { TodoContext } from "../../context/TodoContext";
import { CREATE_TODO } from "../../context/reducer";

const STYLE_BASE: string = "todoInput__";

const TodoInput = (): JSX.Element => {
  const { dispatch } = useContext(TodoContext);
  const [value, setValue] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(e.target.value);
  };

  const createTodo = (e: React.KeyboardEvent): void => {
    if (e.key === "Enter") {
      dispatch({ type: CREATE_TODO, payload: { id: 1, text: value, active: true } });
      setValue("");
    }
  };

  return (
    <div className={`${STYLE_BASE}container`}>
      <div className={`${STYLE_BASE}input`}>
        <TodoCheckBoxToggle disabled={true} />
        <input
          type="text"
          className={`${STYLE_BASE}todoInput`}
          data-testid={"TODO_INPUT"}
          onChange={handleChange}
          onKeyDown={createTodo}
          placeholder={"Create a new todo..."}
          value={value}
        />
      </div>
    </div>
  );
};

export default TodoInput;