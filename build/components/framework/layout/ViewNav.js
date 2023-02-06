import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import PerfectScrollbar from "react-perfect-scrollbar";
import { Box, Toolbar } from "@mui/material";
const viewNavStyle = {
    display: "flex",
    pt: 4,
    justifyContent: "center",
    ".view-tab-nav": {
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "flex-end",
        ".nav-link": {
            mr: 1,
            ml: 1,
            pt: 1,
            pl: 1,
            pb: 0,
            pr: 1,
            textDecoration: "none",
            cursor: "pointer",
            color: "primary.main",
            borderBottom: "2px solid transparent",
            transition: "border-bottom-color 300ms ease",
            alignItems: "center",
            display: "flex",
            flexWrap: "nowrap",
            ".MuiTypography-button": {
                fontSize: { xs: 14, md: 16 },
            },
            "&:hover": {
                borderBottomColor: "primary.main",
                transition: "border-bottom-color 300ms ease",
            },
            "&.active": {
                ".MuiTypography-button": {
                    fontWeight: 600,
                    color: "dark.main",
                },
                borderBottomColor: "dark.main",
                transition: "border-bottom-color 300ms ease",
            }
        }
    }
};
export const ViewNav = (props) => {
    const { children, sticky } = props;
    const contents = (_jsx(Box, Object.assign({ className: "view-navigation-container", sx: viewNavStyle }, { children: _jsx(PerfectScrollbar, { children: _jsx(Toolbar, Object.assign({ className: "view-tab-nav" }, { children: children })) }) })));
    return (_jsx(_Fragment, { children: contents }));
};
