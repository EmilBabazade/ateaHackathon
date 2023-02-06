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
import { Link } from "react-router-dom";
import { Box } from "@mui/material";
const defaultLinkStyle = {
    "a": {
        color: "primary.main",
    }
};
export const StyledLink = (props) => {
    const { sx } = props, rest = __rest(props, ["sx"]);
    return (_jsx(Box, Object.assign({ className: "styled-link", sx: Object.assign(Object.assign({}, defaultLinkStyle), sx) }, { children: _jsx(Link, Object.assign({}, rest)) })));
};
