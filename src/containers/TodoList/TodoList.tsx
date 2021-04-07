import React, { useContext } from "react";
import { TodoContext } from "../../context/TodoContext";

import "./todoList.scss";

const STYLE_BASE: string = "todoList__";

const TodoList = (): JSX.Element => {
  const { state, dispatch } = useContext(TodoContext);
  const { todos } = state;

  return (
    <div className={`${STYLE_BASE}container`} data-testid={"TODO_LIST_CONTAINER"}>
      {todos.map(todo => (
        <p>{todo.text}</p>
      ))}
    </div>
  );
};

export default TodoList;