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
        case CREATE_TODO:
            return { todos: [...state.todos, action.payload] }     
        // case EDIT_TODO:
        // case DELETE_TODO:

        default:
            return state;
    }
}
