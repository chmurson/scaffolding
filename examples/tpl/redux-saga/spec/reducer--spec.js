import { actions, reducer } from "../duck";

describe("{{ name }}Reducer", () => {
    it("action.example", () => {
        const initialState = {};
        const expectedState = {};

        const resultState = reducer(initialState, actions.example());
        expect(resultState).toEqual(expectedState);
    });
});
