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
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Button, LinearProgress } from "@mui/material";
import classNames from "classnames";
const buttonStyle = {
    position: 'relative',
    overflow: "hidden",
    "&.success": {
        backgroundColor: "success.main",
    },
};
export function ButtonAsync(props) {
    var _a;
    const { isExecuting, className, startIcon, success, successChildren, executingMessage, variant = "contained", executingChildren, sx, children } = props, rest = __rest(props, ["isExecuting", "className", "startIcon", "success", "successChildren", "executingMessage", "variant", "executingChildren", "sx", "children"]);
    const c = classNames(className, { 'success': success });
    return (_jsx(Button, Object.assign({ sx: Object.assign(Object.assign({}, sx), buttonStyle), startIcon: success && successChildren ? undefined : startIcon, variant: variant }, rest, { className: c, disabled: isExecuting }, { children: isExecuting ? (_jsxs(_Fragment, { children: [(_a = executingChildren !== null && executingChildren !== void 0 ? executingChildren : executingMessage) !== null && _a !== void 0 ? _a : children, _jsx(LinearProgress, { color: "primary", sx: {
                        position: 'absolute',
                        width: "100%",
                        bottom: 0,
                    } })] })) : (_jsx(_Fragment, { children: success && successChildren ? successChildren : children })) })));
}
