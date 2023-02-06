import { jsx as _jsx } from "react/jsx-runtime";
// example of custom component with Webix UI inside
// this one is a static view, not linked to the React data store
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import * as webix from 'webix/webix';
import 'webix/webix.css';
class Webix extends Component {
    render() {
        return (_jsx("div", { ref: "root" }));
    }
    setWebixData(data) {
        const ui = this.ui;
        if (ui.setValues)
            ui.setValues(data);
        else if (ui.parse)
            ui.parse(data);
        else if (ui.setValue)
            ui.setValue(data);
    }
    componentWillUnmount() {
        this.ui.destructor();
        this.ui = null;
    }
    componentWillUpdate(props) {
        if (props.data)
            this.setWebixData(props.data);
        if (props.select)
            this.select(props.select);
    }
    componentDidMount() {
        this.ui = webix.ui(this.props.ui, ReactDOM.findDOMNode(this.refs.root));
        this.componentWillUpdate(this.props);
    }
}
export default Webix;
