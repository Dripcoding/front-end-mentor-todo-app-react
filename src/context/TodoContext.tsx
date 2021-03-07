import React, { useReducer } from 'react';
import { reducer } from './reducer';

interface ITodoContextProps {
    children: React.ReactChild
}

export interface ITodo {
    id: number;
    text: string;
}

export interface ITodos {
    todos: ITodo[];
}

const initialState: ITodos = {
    todos: [{id: 1, text: "hello"}]
}

const TodoContext = React.createContext(initialState);

const TodoContextProvider = ({children}: ITodoContextProps): JSX.Element => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <TodoContext.Provider value={initialState}>
            {children}
        </TodoContext.Provider>
    )
}


export default TodoContextProvider;