import React, { useContext, useState } from "react";
import { ITodo, TodoContext } from "../../context/TodoContext";

import "./todoListItem.scss";
import TodoCheckBoxToggle from "../TodoCheckBoxToggle";
import { EDIT_TODO } from "../../context/reducer";

interface ITodoListItemProps {
  todo: ITodo;
}

const STYLE_BASE: string = "todoListItem__";

const TodoListItem = ({ todo }: ITodoListItemProps): JSX.Element => {
  const { dispatch } = useContext(TodoContext);
  const [value, setValue] = useState<string>(todo.text);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(e.target.value);
  };

  const editTodo = (e: React.KeyboardEvent): void => {
    if (e.key === "Enter") {
      dispatch({ type: EDIT_TODO, payload: { id: 1, text: value, active: true } });
    }
  };

  return (
    <div className={`${STYLE_BASE}container`} data-testid={"TODO_LIST_ITEM"}>
      <div className={`${STYLE_BASE}input`}>
        <TodoCheckBoxToggle disabled={false} />
        <input
          type="text"
          className={`${STYLE_BASE}input`}
          data-testid={"TODO_LIST_ITEM"}
          onChange={handleChange}
          onKeyDown={editTodo}
          value={value}
        />
      </div>
    </div>
  );
};

export default TodoListItem;