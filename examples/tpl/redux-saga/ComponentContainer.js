import { connect } from "react-redux";
import {{ name }} from "./{{ name }}";
import { actions } from "./duck";
import { selectors } from "./selectors";

const mapStoreToProps = state => ({
    exampleValue: selectors.example(state),
});

const mapDispatchToProps = {
    onExample: actions.example,
};

export default connect(
    mapStoreToProps,
    mapDispatchToProps,
)({{ name }});
