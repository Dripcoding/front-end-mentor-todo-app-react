import React, { useContext } from "react";
import { TodoContext } from "../../context/TodoContext";
import TodoListItem from "../../components/TodoListItem";

import "./todoList.scss";

const STYLE_BASE: string = "todoList__";

const TodoList = (): JSX.Element => {
  const { state, dispatch } = useContext(TodoContext);
  const { todos } = state;

  return (
    <div className={`${STYLE_BASE}container`} data-testid={"TODO_LIST_CONTAINER"}>
      {todos.map(todo => (
        <TodoListItem todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;