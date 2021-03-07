import { ITodo, ITodos } from './TodoContext';

// todo action types
export const CREATE_TODO: string = 'CREATE_TODO';
export const EDIT_TODO: string = 'EDIT_TODO';
export const DELETE_TODO: string = 'DELETE_TODO';

interface IAction {
    type: string;
    payload: ITodo 
}

// todo reducer
export const reducer = (state: ITodos, action: IAction) => {
    switch(action.type) {
        case CREATE_TODO: {
            return { todos: [...state.todos, action.payload] }     
        }
        case EDIT_TODO: {
            const updatedTodo = action.payload;
            const todos = state.todos.map((todo, idx) => {
                if (todo.id === updatedTodo.id) {
                    todo.text = updatedTodo.text;
                }
                return todo;
            })
            return { todos }
        }
        case DELETE_TODO: {
            const todos = state.todos.filter(todo => {
                return todo.id !== action.payload.id
            })
            return { todos }
        }
        default:
            return state;
    }
}
