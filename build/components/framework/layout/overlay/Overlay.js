import { jsx as _jsx } from "react/jsx-runtime";
import { Box } from "@mui/material";
const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: 100,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    color: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
};
export const Overlay = (props) => {
    return (_jsx(Box, Object.assign({ display: "flex", sx: overlayStyle, className: "overlay" }, props, { children: props.children })));
};
