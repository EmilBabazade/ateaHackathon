var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx } from "react/jsx-runtime";
import * as React from 'react';
import classNames from "classnames";
import { Container } from "@mui/material";
import { LoadingIndicator } from "../../layout/LoadingIndicator";
export const MainContainer = (props) => {
    const { className, children, flex = false, fluid = false, fullWidthOnSm = false, fluidMaxWidth } = props, rest = __rest(props, ["className", "children", "flex", "fluid", "fullWidthOnSm", "fluidMaxWidth"]);
    const mainContainerClass = classNames('main-container', className, { 'fwsm': fullWidthOnSm });
    const mainContainerStyle = Object.assign(Object.assign({ paddingLeft: { xs: 0, sm: 4 }, paddingRight: { xs: 0, sm: 4 } }, fluidMaxWidth ? { maxWidth: fluidMaxWidth } : {}), flex ? { display: "flex", justifyContent: "center" } : {});
    return (_jsx(Container, Object.assign({ maxWidth: fluid ? false : "lg", className: mainContainerClass }, rest, { sx: mainContainerStyle }, { children: _jsx(React.Suspense, Object.assign({ fallback: _jsx(LoadingIndicator, {}) }, { children: props.children })) })));
};
export const ViewContainer = (props) => {
    const { className, children, fullWidthOnSm = false } = props, rest = __rest(props, ["className", "children", "fullWidthOnSm"]);
    const mainContainerClass = classNames('main-container view-container', className, { 'fwsm': fullWidthOnSm });
    return (_jsx(Container, Object.assign({ className: mainContainerClass, sx: { paddingLeft: 4, paddingRight: 4 } }, rest, { children: _jsx(React.Suspense, Object.assign({ fallback: _jsx(LoadingIndicator, {}) }, { children: props.children })) })));
};
