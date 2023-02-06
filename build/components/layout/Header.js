import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import * as React from 'react';
import { AppBar, Avatar, Box, IconButton, Slide, Stack, Toolbar, useMediaQuery, useScrollTrigger } from "@mui/material";
import { MenuOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { Waypoint } from "react-waypoint";
import { AppContext } from "../configure/configureAppContext";
const headerStyle = {
    borderRadius: 1,
    width: "auto",
    "&.stuck": {
        top: 0,
    },
    "& .main-link": {
        borderRadius: 1,
        pl: { xs: 2, sm: "6px", md: "10px" },
        pr: { xs: 2, sm: "6px", md: "10px" },
    },
    "& .active": {
        "& .MuiTypography-root": {
            color: "secondary.main",
        },
        "& .MuiSvgIcon-root": {
            color: "secondary.main",
        },
    },
    "& .MuiTypography-root": {
        ml: 1,
        color: "primary.main",
        display: { sm: "none", md: "flex" },
    },
    "& .MuiSvgIcon-root": {
        color: "primary.main",
    },
};
export const Header = () => {
    const [isStuck, setIsStuck] = React.useState(false);
    const { sidebarOpen, setSidebarOpen } = React.useContext(AppContext);
    const isDesktop = useMediaQuery((theme) => theme.breakpoints.up("md"));
    const trigger = useScrollTrigger();
    const toggleSidebar = () => {
        setSidebarOpen && setSidebarOpen(!sidebarOpen);
    };
    return (_jsxs(_Fragment, { children: [_jsx(Slide, Object.assign({ in: isDesktop || !trigger }, { children: _jsx(AppBar, Object.assign({ className: `header-container${(isStuck ? " stuck" : "")}`, elevation: isStuck ? 4 : 0, color: isStuck ? "primary" : "transparent", position: isStuck ? "sticky" : "static", sx: Object.assign({}, headerStyle) }, { children: _jsxs(Toolbar, { children: [_jsx(Box, Object.assign({ sx: { mr: 4 } }, { children: _jsxs(Stack, Object.assign({ direction: "row" }, { children: [!isDesktop && (_jsx(IconButton, Object.assign({ onClick: () => toggleSidebar(), className: "sidebar-toggler" }, { children: _jsx(MenuOutlined, {}) }))), _jsx(Link, Object.assign({ to: "/" }, { children: "Logo Here" }))] })) })), _jsx(Box, { sx: { flexGrow: 1 } }), _jsx(Avatar, Object.assign({ sx: { bgColor: "primary.main" } }, { children: "AB" }))] }) })) })), _jsx(Waypoint, { topOffset: 0, scrollableAncestor: document.getElementById("app"), onEnter: (e) => setIsStuck(false), onLeave: (e) => setIsStuck(true) })] }));
};
