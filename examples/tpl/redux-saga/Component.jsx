import React from "react";
import PropTypes from "prop-types";

export default class {{name}} extends React.Component {
    static propTypes = {
        className: PropTypes.string,
    };

    static defaultProps = {
        className: "",
    };

    render() {
        return <div className={this.props.className}>

        </div>;
    }
}
