export const moduleName = "{{ name }}";

const localState = state => state[moduleName];

export const selectors = {
    example: state => localState(state).exampleValue,
};
