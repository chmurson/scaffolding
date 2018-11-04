import React from "react";
import { mount } from "enzyme";
import toJson from "enzyme-to-json";
import {{ name }} from "../{{ name }}";

describe("Component", () => {
    let consoleSpy;

    beforeAll(() => {
        consoleSpy = jest.spyOn(console, "error");
    });

    describe("with default props", () => {
        it("matches snapshots", () => {
            const component = mountComponent();
            expect(toJson(component)).toMatchSnapshot();
        });
    });

    it("shows no errors on console", () => {
        expect(consoleSpy).not.toHaveBeenCalled();
    });
});

/**
 * @param props
 * @return {ReactWrapper<React.Component["props"], React.Component["state"], React.Component> | ReactWrapper<any, any>}
 */
function mountComponent(props = {}) {
    return mount(<{{ name }} {...props} />);
}
