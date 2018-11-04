import { createAction, createReducer } from "redux-act";
import { takeLatest, call } from "redux-saga/effects";
import { delay } from "redux-saga";

export const actions = {
    example: createAction("Example action"),
};

const initialState = {
    exampleValue: false,
};

export const reducer = createReducer(
    {
        [actions.example]: (state, payload) => state,
    },
    initialState,
);

export function* onExample({ payload: data }) {
    yield call(delay);
}

export const saga = [takeLatest(actions.example, onExample)];
