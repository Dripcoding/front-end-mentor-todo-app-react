import { ITodo, ITodos } from './TodoContext';

// todo action types
export const CREATE_TODO: string = 'CREATE_TODO';
export const EDIT_TODO: string = 'EDIT_TODO';
export const DELETE_TODO: string = 'DELETE_TODO';
export const COMPLETE_TODO: string = 'COMPLETE_TODO';
export const ACTIVATE_TODO: string = 'ACTIVATE_TODO';
export const DELETE_ALL_TODOS: string = 'DELETE_ALL_TODOS';
// visibility action types
export const VIEW_ALL_TODOS: string = 'VIEW_ALL_TODOS';
export const VIEW_ALL_COMPLETED_TODOS: string = 'VIEW_ALL_COMPLETED_TODOS';
export const VIEW_ALL_ACTIVE_TODOS: string = 'VIEW_ALL_ACTIVE_TODOS';


interface IAction {
    type: string;
    payload: ITodo 
}

export const todoReducer = (state: ITodos, action: IAction): ITodos => {
    switch(action.type) {
        case CREATE_TODO: {
            return { todos: [...state.todos, action.payload] }     
        }
        case EDIT_TODO: {
            const updatedTodo = action.payload;
            const todos = state.todos.map(todo => {
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
        case COMPLETE_TODO: {
            const todos = state.todos.map(todo => {
                if (todo.id === action.payload.id) {
                    todo.active = false
                }
                return todo;
            })
            return { todos }
        }
        default:
            return state;
    }
}
