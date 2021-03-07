import { reducer, CREATE_TODO } from '../context/reducer'

describe("todo reducer" , () => {

    it("creates todo", () => {
        const action = { type: CREATE_TODO, payload: { id: 2, text: "second todo"}}
        const state = {
            todos: [{id: 1, text: "first todo"}]
        }
        const result = reducer(state, action);
        const expectedTodos = [...state.todos, action.payload];
       
        expect(result.todos).not.toBeNull();
        expect(result.todos).toEqual(expectedTodos)
    })
})