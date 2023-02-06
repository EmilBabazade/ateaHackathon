import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, CircularProgress, LinearProgress } from "@mui/material";
import { visuallyHidden } from '@mui/utils';
/**
 * Simple spinner that can be shown during loading.
 */
export const LoadingIndicator = (props) => {
    const { className, fullWidth, size = "md", linear } = props;
    let indicatorSize = 16;
    switch (size) {
        case "sm":
            indicatorSize = 16;
            break;
        case "md":
            indicatorSize = 24;
            break;
        case "lg":
            indicatorSize = 32;
            break;
    }
    const containerStyle = {
        display: "flex",
        ml: fullWidth ? 0 : 2,
        mr: fullWidth ? 0 : 2,
        width: fullWidth ? "100%" : "auto",
        alignItems: "center",
        justifyContent: "center",
        ".MuiCircularProgress-root": {
            width: indicatorSize,
            height: indicatorSize,
        }
    };
    return (linear ? (_jsxs(Box, Object.assign({ className: 'loading-indicator ' + (className ? className : ''), sx: { position: "absolute", top: 0, width: "100%", left: 0 } }, { children: [_jsx(LinearProgress, { sx: { position: "absolute", top: 0, width: "100%", left: 0 } }), _jsx(Box, Object.assign({ sx: visuallyHidden, className: "visually-hidden" }, { children: "Loading" }))] }))) : (_jsxs(Box, Object.assign({ className: 'loading-indicator ' + (className ? className : ''), sx: containerStyle }, { children: [_jsx(CircularProgress, { size: size, color: "primary" }), _jsx(Box, Object.assign({ sx: visuallyHidden, className: "visually-hidden" }, { children: "Loading" }))] }))));
};
