import { actions } from "../duck";
import {{ name }}Container from "../{{ name }}Container";
import { moduleName } from "../selectors";

const { mapStateToProps, mapDispatchToProps } = {{ name }}Container;

jest.mock("react-redux", () => ({
    connect: (_mapStateToProps, _mapDispatchToProps) => {
        const result = {};
        result.mapStateToProps = _mapStateToProps;
        result.mapDispatchToProps = _mapDispatchToProps;
        return () => result;
    },
}));

describe("XXXContainer", () => {
    describe("mapStateToProps", () => {
        it("matches expected result", () => {
            const inputState = {
                [moduleName]: {
                    exampleValue: false,
                },
            };

            const props = mapStateToProps(inputState);
            expect(props).toEqual({ exampleValue: false });
        });
    });

    describe("mapDispatchToProps", () => {
        it("matches expected result", () => {
            expect(mapDispatchToProps).toEqual({
                onExample: actions.example,
            });
        });
    });
});
