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
import { Box } from "@mui/material";
const defaultBoxStyle = {
    borderRadius: 2,
    mb: 2,
    position: "relative",
    overflow: "hidden",
    "&.row": {
        display: "flex",
        flexDirection: "row",
        flexWrap: "nowrap",
    },
    "&.transparent": {
        backgroundColor: "transparent",
        boxShadow: "none",
    },
    "&.section-header": {
        borderBottomRightRadius: "0",
        borderBottomLeftRadius: "0",
        borderBottom: "1px",
        borderBottomStyle: "solid",
        borderBottomColor: "background.default",
        px: 2,
        mb: 0,
        "h1": {
            fontSize: { xs: 18, sm: 22, md: 32 }
        },
        ".MuiButton-startIcon": {
            mr: { xs: 0, sm: 1 },
            ml: { xs: 0 },
        },
        ".MuiButton-root": {
            fontSize: { xs: 0, sm: 14, md: "initial" },
        },
        '.button-back': {
            width: 50,
            height: 50,
            margin: "auto 0"
        },
    },
    "&.section-body": {
        borderTopRightRadius: "0",
        borderTopLeftRadius: "0",
    },
    "&.section-actions": {
        p: 2,
        ".form-buttons": {
            m: 0,
        }
    },
    "h1, h2, h3, h4, h5": {
        color: "secondary.main",
        mt: 1,
        mb: 1,
    },
    ".box-section-h": {
        m: 0,
        px: 5,
        py: 1,
    },
    ".box-section-b": {
        m: 0,
        px: 5,
        py: 2,
    },
};
export const BoxSection = (props) => {
    const { className, actions, children, top, bottom, transparent, noMargin, row, sx } = props, rest = __rest(props, ["className", "actions", "children", "top", "bottom", "transparent", "noMargin", "row", "sx"]);
    const pageSectionClass = classNames("box-section", { "section-header": top }, { "section-body": bottom }, { "section-actions": actions }, { "transparent": transparent }, { "row": row }, className);
    const boxStyle = Object.assign(Object.assign({ margin: noMargin ? 0 : "auto", backgroundColor: "accentBackground.main" }, defaultBoxStyle), sx);
    return (_jsx(Box, Object.assign({ className: pageSectionClass, sx: boxStyle }, rest, { children: children })));
};
export const BoxSectionBody = (props) => {
    const { noMargin } = props, rest = __rest(props, ["noMargin"]);
    return (_jsx(BoxSection, Object.assign({ className: "box-section-b", sx: { marginTop: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 } }, rest)));
};
/**
 * Convenience component that renders a PageSection designed for a header
 */
export const BoxSectionHeader = (props) => {
    const { row = true, transparent = true, noMargin, top, className } = props, rest = __rest(props, ["row", "transparent", "noMargin", "top", "className"]);
    return (_jsx(BoxSection, Object.assign({ top: true, transparent: transparent, row: row, noMargin: true, sx: { p: 1 }, className: `box-section-h` }, rest)));
};
