import React from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import {Box, SxProps, Theme, Toolbar} from "@mui/material";

export interface ViewNavProps {
    children?: React.ReactNode,
    sticky?: boolean,
}


const viewNavStyle: SxProps<Theme> = {
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
                fontSize: {xs: 14, md: 16},
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

export const ViewNav = (props: ViewNavProps) => {
    const {children, sticky} = props;

    const contents = (
        <Box className={"view-navigation-container"} sx={viewNavStyle}>
            <PerfectScrollbar>
                <Toolbar className={"view-tab-nav"}>
                    {children}
                </Toolbar>
            </PerfectScrollbar>
        </Box>
    );

    return (
        <>
            {contents}
        </>
    )
};