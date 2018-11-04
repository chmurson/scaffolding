import { call } from "redux-saga/effects";
import { delay } from "redux-saga";
import { onExample } from "../duck";

describe("{{ name}} saga", () => {
    describe("actions.example", () => {
        let iterator;
        beforeAll(() => {
            iterator = onExample({});
        });

        it("calls delay", () => {
            expect(iterator.next().value).toEqual(call(delay));
        });

        it("done", () => {
            expect(iterator.next().done).toEqual(true);
        });
    });
});
