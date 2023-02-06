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
import React from "react";
import classNames from "classnames";
import { lighten, TableRow } from "@mui/material";
import { BoxSection, BoxSectionBody } from "../../boxSection/BoxSection";
export const FullHeightCell = (props) => {
    const { children, className } = props;
    const c = classNames("full-height-cell", className);
    return (_jsx("div", Object.assign({ className: c }, { children: children })));
};
export const ItemActionContainer = (props) => {
    const { children, className } = props;
    const c = classNames("item-action-container", className);
    return (_jsx("div", Object.assign({ className: c }, { children: children })));
};
/**
 * List item element
 */
export function DetailedListItem(props) {
    const { children, className, onLongPress, onDoubleClick, expandable, actionFactory, sx } = props, rest = __rest(props, ["children", "className", "onLongPress", "onDoubleClick", "expandable", "actionFactory", "sx"]);
    const detailListItemStyle = Object.assign({ cursor: "pointer", transition: (theme) => (theme.transitions.create('background-color', {
            easing: theme.transitions.easing.easeIn,
            duration: theme.transitions.duration.enteringScreen,
        })), "&:hover": {
            backgroundColor: (theme) => lighten(theme.palette.background.default, 0.5),
            transition: (theme) => (theme.transitions.create('background-color', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.leavingScreen,
            })),
        } }, sx);
    return (_jsx(BoxSection, Object.assign({ className: `list-item ${className}`, sx: detailListItemStyle }, rest, { children: children })));
}
export function DetailedListItemContents(props) {
    return (_jsx(BoxSectionBody, Object.assign({ className: `list-item-contents` }, { children: props.children })));
}
/**
 * Table row which can handle actions on long press
 */
export function ListRow(props) {
    const { children, className, onLongPress, onClick, onDoubleClick } = props, rest = __rest(props, ["children", "className", "onLongPress", "onClick", "onDoubleClick"]);
    const ref = React.useRef(null);
    // const handlers = useLongPress({onLongPress: onLongPress, onClick: onClick, onDoubleClick: onDoubleClick, ref: ref})
    const defaultStyle = {
        background: "#fff",
        color: "#5C6873FF",
        borderBottom: `1px solid #AEB3C2FF`,
    };
    // const {style} = useSpotlightBackgroundEffect({
    //     ref: ref,
    //     backgroundColor: "#fff",
    //     effectBackgroundColor: "#f3f3f3",
    //     effectStrength: 0.6,
    //     effectRadius: 150,
    // })
    return (_jsx(TableRow, Object.assign({ hover: true, className: `list-row ${className}` }, rest, { onClick: (e) => onClick && onClick(e), ref: ref, sx: Object.assign({}, defaultStyle) }, { children: children })));
}
