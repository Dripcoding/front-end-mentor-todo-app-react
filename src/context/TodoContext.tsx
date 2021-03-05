import React from 'react';

interface ITodoContextProps {
    children: React.ReactChild
}

const initialState = {
    todos: []
}

const TodoContext = React.createContext({
    todos: []
});

const TodoContextProvider = ({children}: ITodoContextProps): JSX.Element => {
 

    return (
        <TodoContext.Provider value={initialState}>
            {children}
        </TodoContext.Provider>
    )
}


export default TodoContextProvider;