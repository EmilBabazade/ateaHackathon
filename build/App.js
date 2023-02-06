import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { HashRouter as Router, NavLink, Route } from 'react-router-dom';
import { Box, CssBaseline, Divider, List, ListItem, ThemeProvider } from "@mui/material";
import './assets/App.css';
import { Layout } from "./components/layout/Layout";
import { getTheme } from "./components/configuration/themeConfig";
import { Dashboard } from "./components/layout/Dashboard";
import { ServiceNowForm } from "./components/layout/ServiceNowForm";
import { Header } from "./components/layout/Header";
import { RecoilRoot } from "recoil";
import { ThemeColorContext } from './components/configure/configureAppContext';
const App = () => {
    const [darkMode, setDarkMode] = React.useState(false);
    const [selectedDashboard, setSelectedDashBoard] = React.useState();
    const theme = React.useMemo(() => getTheme(darkMode), [darkMode, getTheme]);
    const colorMode = React.useMemo(() => ({
        // The dark mode switch would invoke this method
        toggleColorMode: () => {
            setDarkMode((isDarkMode) => !isDarkMode);
        },
        colorMode: darkMode ? "dark" : "light",
    }), [darkMode, setDarkMode]);
    const savedDashBoardsTemp = [
        { label: "All Assets", filter: "Assets" },
        { label: "Finance", filter: "Finance" },
        { label: "Contracts", filter: "Contracts" },
    ];
    return (_jsx(Router, { children: _jsx(RecoilRoot, { children: _jsx(ThemeProvider, Object.assign({ theme: theme }, { children: _jsx(ThemeColorContext.Provider, Object.assign({ value: colorMode }, { children: _jsx(CssBaseline, { children: _jsxs("div", { children: [_jsx(Header, {}), _jsx(Layout, { children: _jsx(Box, { children: _jsxs("div", Object.assign({ className: "content-box" }, { children: [_jsxs(List, Object.assign({ className: "menu" }, { children: [_jsx(ListItem, { children: _jsx(NavLink, Object.assign({ to: "/", exact: true, activeClassName: "active" }, { children: "Home" })) }), savedDashBoardsTemp.map((d, i) => (_jsx(ListItem, { children: _jsx(NavLink, Object.assign({ to: `/dashboard/${d.filter}`, activeClassName: "active" }, { children: d.label })) }, i))), _jsx(Divider, {}), _jsx(ListItem, { children: _jsx(NavLink, Object.assign({ to: "/serviceNow", exact: true, activeClassName: "active" }, { children: "Support" })) })] })), _jsxs("div", Object.assign({ className: "content" }, { children: [_jsx(Route, { exact: true, path: "/", component: Dashboard }), _jsx(Route, { path: "/dashboard/:filter", component: Dashboard }), _jsx(Route, { path: "/serviceNow", component: ServiceNowForm })] }))] })) }) })] }) }) })) })) }) }));
};
export default App;
