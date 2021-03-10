import {
    todoReducer,
    CREATE_TODO,
    EDIT_TODO,
    DELETE_TODO,
    COMPLETE_TODO,
    ACTIVATE_TODO,
    DELETE_ALL_TODOS, VIEW_ALL_COMPLETED_TODOS
} from '../context/reducer'

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

    it("sets active state to false for a complete todo", () => {
        const action = { type: COMPLETE_TODO, payload: { id: 1, text: "first todo", active: true}}
        const state = {
            todos: [{ id: 1, text: "first todo", active: true}]
        }
        const result = todoReducer(state, action);

        expect(result.todos).not.toBeNull();
        expect(result.todos).toEqual(state.todos);
    })

    it("sets active state to true for an active todo", () => {
        const action = {type: ACTIVATE_TODO, payload: {id: 1, text: "example todo", active: false}}
        const state = {
            todos: [{id: 1, text: "first todo", active: true}]
        }
        const result = todoReducer(state, action)

        expect(result.todos).not.toBeNull();
        expect(result.todos).toEqual(state.todos);
    })

    it("deletes all todos", () => {
        const action = {type: DELETE_ALL_TODOS, payload: {id: 1, text: "", active: false}}
        const state = {
            todos: [
                {id: 1, text: "first todo", active: true},
                {id: 2, text: "second todo", active: true},
                {id: 3, text: "third todo", active: false}
            ]
        }
        const result = todoReducer(state, action);

        expect(result.todos).not.toBeNull();
        expect(result.todos.length).toBe(0);
    })

    it("shows all completed todos", () => {
        const action = {type: VIEW_ALL_COMPLETED_TODOS, payload: {id: 1, text: "", active: false}}
        const state = {
            todos: [
                {id: 1, text: "first todo", active: true},
                {id: 2, text: "second todo", active: true},
                {id: 3, text: "third todo", active: false}
            ]
        }
        const expected = [{id: 3, text: "third todo", active: false}]
        const result = todoReducer(state, action)

        expect(result.todos).not.toBeNull();
        expect(result.todos.length).toBe(1);
        expect(result.todos).toEqual(expected)

    })
})