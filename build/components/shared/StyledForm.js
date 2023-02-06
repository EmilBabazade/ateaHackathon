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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import classNames from "classnames";
import { Box } from "@mui/material";
export const FormSection = (props) => {
    const { label, className, margin = 2, padding = 1, row, children } = props;
    const formSectionClass = classNames("form-section", className);
    const boxStyle = React.useMemo(() => ({
        display: "flex",
        marginBottom: margin,
        paddingBottom: padding,
        justifyContent: {
            xs: "center",
            md: "start",
        },
        flexWrap: "nowrap",
        flexDirection: row ? "row" : "column",
        marginTop: "10px",
        ".form-section-header": {
            width: "100%",
            margin: "10px 0 20px",
            borderBottom: "1px solid",
            borderColor: "secondary.main",
            lineHeight: "0.1em",
        },
        ".form-separator": {
            borderBottom: "1px solid",
            borderColor: "secondary.main",
        },
        ".form-section-label": {
            fontWeight: 600,
            mr: "1em",
            fontSize: 14,
            whiteSpace: "nowrap",
            color: "primary.main"
        },
    }), [margin, padding, row]);
    return (_jsxs(Box, Object.assign({ className: "form-section-container", sx: boxStyle }, { children: [_jsxs(Box, Object.assign({ sx: { display: "flex", flexDirection: "row", flexWrap: "nowrap" } }, { children: [label && (_jsx(Box, Object.assign({ className: "form-section-label", component: "span" }, { children: label }))), _jsx("div", { className: "form-section-header" })] })), _jsx(Box, Object.assign({ sx: { pt: 1, pb: 1 }, className: formSectionClass }, { children: children }))] })));
};
const styledFormStyle = {
    ".styled-form": {
        ".MuiInputAdornment-root": {
            ".MuiFormControlLabel-label": {
                "fontSize": "0.9rem",
            }
        },
        ".MuiInputAdornment-positionEnd": {
            ".MuiFormControlLabel-root": {
                marginRight: 0,
            }
        },
        ".form-section-container:last-child": {
            marginBottom: 0
        }
    }
};
export const StyledForm = (props) => {
    const { children, inline, tag, innerRef, className, cssModule } = props, rest = __rest(props, ["children", "inline", "tag", "innerRef", "className", "cssModule"]);
    const c = classNames("styled-form", className);
    return (_jsx(Box, Object.assign({ sx: styledFormStyle }, { children: _jsx("form", Object.assign({ className: c, onSubmit: (e) => e.preventDefault() }, rest, { children: children })) })));
};
