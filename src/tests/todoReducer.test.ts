import { todoReducer, CREATE_TODO, EDIT_TODO, DELETE_TODO } from '../context/reducer'

describe("todo reducer" , () => {

    it("creates todo", () => {
        const action = { type: CREATE_TODO, payload: { id: 2, text: "second todo", active: true}}
        const state = {
            todos: [{ id: 1, text: "first todo", active: true }]
        }
        const result = todoReducer(state, action);
        const expectedTodos = [...state.todos, action.payload];
       
        expect(result.todos).not.toBeNull();
        expect(result.todos).toEqual(expectedTodos)
    })

    it("edits todo", () => {
        const action = { type: EDIT_TODO, payload: {id: 2, text: "new todo text", active: true}}
        const state = {
            todos: [{ id: 1, text: "first todo", active: true }, { id: 2, text: "second todo", active: true }]
        }
        const result = todoReducer(state, action);
        const expectedTodos = state.todos

        expect(result.todos).not.toBeNull();
        expect(result.todos).toEqual(expectedTodos);
    })

    it("deletes todo", () => {
        const action = { type: DELETE_TODO, payload: { id: 1, text: "todo to delete", active: true }}
        const state = {
            todos: [{ id: 1, text: "first todo", active: true }, { id: 2, text: "second todo", active: true }]
        }
        const result = todoReducer(state, action);
        const expectedTodos = [state.todos[1]];

        expect(result.todos).not.toBeNull();
        expect(result.todos).toEqual(expectedTodos)
    })

    it("returns given state as the default behavior", () => {
        const DEFAULT_ACTION = "default"
        const action = { type: DEFAULT_ACTION, payload: { id: 1, text: "default", active: true }}
        const state = {
            todos: [{ id: 1, text: "first todo", active: true }, { id: 2, text: "second todo", active: true }]
        }
        const result = todoReducer(state, action);

        expect(result.todos).not.toBeNull();
        expect(result.todos).toEqual(state.todos)
    })
})