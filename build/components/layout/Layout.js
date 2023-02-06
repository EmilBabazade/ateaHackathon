import { jsx as _jsx } from "react/jsx-runtime";
import { Box } from "@mui/material";
const layoutStyle = {
    ".app-header": {}
};
export function Layout(props) {
    const { children } = props;
    return (_jsx("main", Object.assign({ className: "app" }, { children: _jsx(Box, Object.assign({ className: "contents" }, { children: children })) })));
}
