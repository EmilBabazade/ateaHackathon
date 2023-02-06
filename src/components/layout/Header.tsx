import * as React from 'react';
import {AppBar, Avatar, Box, IconButton, Slide, Stack, SxProps, Theme, Toolbar, useMediaQuery, useScrollTrigger} from "@mui/material";
import {MenuOutlined} from "@mui/icons-material";
import {Link} from "react-router-dom";
import {Waypoint} from "react-waypoint";
import {AppContext, IAppContext} from "../configure/configureAppContext";
import {AppNavbarBrand} from "./AppNavbarBrand";


const headerStyle: SxProps | any = {
    borderRadius: 1,
    width: "auto",

    "&.stuck": {
        top: 0,
    },
    "& .main-link": {
        borderRadius: 1,
        pl: {xs: 2, sm: "6px", md: "10px"},
        pr: {xs: 2, sm: "6px", md: "10px"},
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
        display: {sm: "none", md: "flex"},

    },
    "& .MuiSvgIcon-root": {
        color: "primary.main",
    },
};

export const Header = () => {


    const [isStuck, setIsStuck] = React.useState<boolean>(false);
    const {sidebarOpen, setSidebarOpen} = React.useContext<IAppContext>(AppContext);

    const isDesktop = useMediaQuery((theme: Theme) => theme.breakpoints.up("md"));
    const trigger = useScrollTrigger();


    const toggleSidebar = () => {
        setSidebarOpen && setSidebarOpen(!sidebarOpen);
    };

    return (
        <>

            <Slide in={isDesktop || !trigger}>
                <AppBar className={`header-container${(isStuck ? " stuck" : "")}`} elevation={isStuck ? 2 : 0}
                        color={isStuck ? "surface" : "transparent"}
                        position={isStuck ? "sticky" : "static"}
                        sx={{...headerStyle}}

                >
                    <Toolbar>

                        <Box sx={{mr: 4}}>
                            <Stack direction={"row"}>
                                {!isDesktop && (
                                    <IconButton onClick={() => toggleSidebar()} className={"sidebar-toggler"}>
                                        <MenuOutlined/>
                                    </IconButton>
                                )}
                                <Link to="/">
                                    <AppNavbarBrand/>
                                </Link>
                            </Stack>
                        </Box>

                        <Box sx={{flexGrow: 1}}/>
                        <Avatar sx={{backgroundColor: "secondary.main"}}>AB</Avatar>
                    </Toolbar>
                </AppBar>
            </Slide>
            {/*<div style={{position: "fixed", width: 0, height: 0, overflow: "hidden"}}>*/}
            {/*    /!* Hacky way of having <SidebarRequired/> component to be rendered when the Sidebar is completely hidden *!/*/}
            {/*    <AppRoutes routes={sidebarRoutes}/>*/}
            {/*</div>*/}
            <Waypoint topOffset={0} scrollableAncestor={document.getElementById("app")}
                      onEnter={(e) => setIsStuck(false)}
                      onLeave={(e) => setIsStuck(true)}/>
        </>
    );
};
