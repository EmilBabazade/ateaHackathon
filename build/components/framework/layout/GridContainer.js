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
import Grid2 from "@mui/material/Unstable_Grid2";
import classNames from "classnames";
const gridContainerStyle = {
    px: 2,
    ".box-section": {
        ".box-section-b": {
            px: { xs: 2, lg: 3 },
            py: { xs: 2, lg: 3 },
        },
    }
};
export function GridContainer(props) {
    const { className, spacing = 2, container = true, sx } = props, rest = __rest(props, ["className", "spacing", "container", "sx"]);
    const c = classNames(className, "grid-container");
    return (_jsx(Grid2, Object.assign({ container: container, spacing: spacing, className: c, sx: Object.assign(Object.assign({}, gridContainerStyle), sx) }, rest)));
}
export function GridItem(props) {
    const { className, spacing = 2, container = false, xs = 12, lg = 6, sx } = props, rest = __rest(props, ["className", "spacing", "container", "xs", "lg", "sx"]);
    const c = classNames(className, "grid-item");
    return (_jsx(Grid2, Object.assign({ container: container, spacing: spacing, className: c, xs: xs, lg: lg }, rest)));
}
