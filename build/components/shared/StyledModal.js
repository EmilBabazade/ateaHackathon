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
import classNames from "classnames";
import { Dialog, useMediaQuery } from "@mui/material";
/**
 * Shared modal component with some common styling
 */
export function StyledModal(props) {
    const { className, sx, maxWidth = "md", fullWidth = true } = props, other = __rest(props, ["className", "sx", "maxWidth", "fullWidth"]);
    const isMd = useMediaQuery((theme) => theme.breakpoints.up("md"));
    const c = classNames('styled-modal', className);
    const dialogStyle = Object.assign({ "& .MuiDialogTitle-root": {
            padding: 3,
            color: "secondary.main",
        }, '& .MuiDialogContent-root': {
            padding: 3,
        }, '& .MuiDialogActions-root': {
            padding: 3,
            justifyContent: "flex-start"
        }, '& .MuiDialog-paper': {
            margin: 0,
        }, '.form-buttons': {
            width: "100%",
            ".ms-auto": {
                ml: "auto",
            }
        } }, sx);
    return (_jsx(Dialog, Object.assign({ className: c, fullScreen: !isMd, maxWidth: maxWidth, fullWidth: fullWidth, sx: Object.assign({}, dialogStyle) }, other)));
}
