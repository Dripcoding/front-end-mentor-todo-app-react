import React, { useReducer } from "react";
import { IAction, todoReducer } from "./reducer";

interface ITodoContextProps {
  children: React.ReactChild;
}

export interface ITodo {
  id: number;
  text: string;
  active: boolean;
}

export interface ITodoContext {
  dispatch: React.Dispatch<IAction>;
  state: ITodoState
}

export interface ITodoState {
  todos: ITodo[]
}

const initialState = {
  todos: [{ id: 1, text: "finish homework", active: true }]
};

export const TodoContext: React.Context<ITodoContext> = React.createContext({
  dispatch: (value: IAction) => {},
  state: initialState
});

const TodoContextProvider = ({ children }: ITodoContextProps): JSX.Element => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const value: ITodoContext = { state, dispatch };

  return (
    <TodoContext.Provider value={value}>{children}</TodoContext.Provider>
  );
};

export default TodoContextProvider;
