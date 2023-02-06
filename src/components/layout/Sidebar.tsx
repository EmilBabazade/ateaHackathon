import * as React from 'react';
import {Box, Divider, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Stack, SwipeableDrawer, SxProps, Theme, Tooltip, useMediaQuery} from "@mui/material";
import {AccountBalance, ArrowLeft, ArrowRight, DashboardCustomize, DashboardOutlined, Description, Devices, Home, HomeRepairService} from "@mui/icons-material";
import {AppContext, IAppContext} from "../configure/configureAppContext";
import {NavLinkTrackActive} from '../shared/NavLinkTrackActive';

export interface AppSidebarProps {
    drawerWidth: string,
}

// https://mui.com/material-ui/react-drawer/ - persistent drawer


export function AppSidebar(props: AppSidebarProps) {
    const {drawerWidth} = props;

    // state
    //

    const [isUserOptionsOpen, setUserOptionsOpen] = React.useState<boolean>(false);
    const {sidebarOpen, setSidebarOpen} = React.useContext<IAppContext>(AppContext);
    const {sidebarCollapsed, setSidebarCollapsed} = React.useContext<IAppContext>(AppContext);

    const isDesktop = useMediaQuery((theme: Theme) => theme.breakpoints.up("md"));

    const drawerStyle: SxProps<Theme> = {
        width: drawerWidth,
        flexShrink: 0,
        overflowX: "hidden",
        transition: (theme: Theme) => (
            theme.transitions.create('all', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            })
        ),
        '& .MuiDrawer-paper': {
            overflowX: "hidden",
            width: drawerWidth,
            boxSizing: 'border-box',
            transition: 'all 225ms cubic-bezier(0.0, 0, 0.2, 1) 0ms !important',
        },
        '.sidebar-nav-title': {
            pl: 1,
            color: "primary.main",
            textTransform: "uppercase",
            fontWeight: 600,
            fontSize: 13,
            letterSpacing: "0.15rem",
            transition: (theme: Theme) => (
                theme.transitions.create('color', {
                    easing: theme.transitions.easing.easeIn,
                    duration: theme.transitions.duration.leavingScreen,
                })
            ),
        },
        '& .MuiListItem-root': {
            pl: 0,
            pr: 0,
            pt: 0,
            pb: 0,
            transition: 'padding 245ms cubic-bezier(0.0, 0, 0.2, 1) 0ms',

            '& a': {
                pl: 1,
                pr: 1,
            },
            '.active-pill': {
                height: "18px",
                width: "4px",
                marginRight: 1,
                borderRadius: "25%",
                backgroundColor: "transparent",
            },
            '.MuiListItemIcon-root': {
                minWidth: "36px",
            },
            '.MuiListItemText-root': {
                width: "auto",
                p: 0,
                m: 0,
                color: "primary.main",
                transition: 'color 245ms cubic-bezier(0.0, 0, 0.2, 1) 0ms',
                transitionDelay: "250ms",
            },
            '.active': {

                '.active-pill': {
                    height: "18px",
                    width: "4px",
                    marginRight: 1,
                    borderRadius: "25%",
                    backgroundColor: "secondary.main",
                },

                '.MuiTypography-root': {
                    fontWeight: 500,
                },
            },
        },
        '&.collapsed': {
            '& .MuiDrawer-paper': {
                width: drawerWidth,
                boxSizing: 'border-box',
                transition: 'all 225ms cubic-bezier(0.0, 0, 0.2, 1) 0ms !important',
            },
            '& .MuiListItem-root': {
                pt: 1,
                pb: 1,
                transition: 'padding 245ms cubic-bezier(0.0, 0, 0.2, 1) 0ms',

                '.MuiListItemText-root': {
                    width: 0,
                    height: 0,
                    color: "transparent",
                    transition: 'color 0ms cubic-bezier(0.0, 0, 0.2, 1) 0ms',
                    transitionDelay: "0",
                },
                '.MuiListItemIcon-root': {
                    minWidth: 0,
                },
            },
            '.sidebar-nav-title': {
                color: "transparent",
                display: "none",
            },
        },
    };

    const iOS = typeof navigator !== 'undefined' && /iPad|iPhone|iPod/.test(navigator.userAgent);

    // actions
    //

    const toggleUserArea = () => {
        setUserOptionsOpen(!isUserOptionsOpen);
    };


    const toggleSidebar = () => {
        if (isDesktop) {
            setSidebarCollapsed && setSidebarCollapsed(!sidebarCollapsed);
            return;
        } else {
            if (sidebarOpen) setUserOptionsOpen(false); // close user area on close
            setSidebarOpen && setSidebarOpen(!sidebarOpen);
        }
    };

    const savedDashBoardsTemp = [
        {label: "Apple Devices", filter: "Assets"},
        {label: "Month Overview", filter: "Finance"},
        {label: "Bills Due", filter: "Contracts"},
    ];


    return (
        <SwipeableDrawer variant={isDesktop ? "persistent" : "temporary"}
                         className={sidebarCollapsed ? "collapsed" : ""}
                         disableBackdropTransition={iOS}
                         disableDiscovery={iOS}
                         anchor={"left"}
                         open={sidebarOpen}
                         onOpen={() => setSidebarOpen && setSidebarOpen(true)}
                         elevation={0}
                         onClose={() => setSidebarOpen && setSidebarOpen(false)}
                         sx={drawerStyle}>
            <Stack className={"sidebar-contents"} direction={"column"}>
                <Box sx={{display: "flex", justifyContent: sidebarCollapsed ? "center" : "flex-start"}}>
                    <IconButton onClick={() => toggleSidebar()}>
                        {sidebarCollapsed ? <ArrowRight/> : <ArrowLeft/>}
                    </IconButton>
                </Box>
                {sidebarCollapsed && (<Divider sx={{mx: 2}}/>)}
                <List className={"view-sidebar"}>
                    <ListItem>
                        <Tooltip
                            disableFocusListener={!sidebarCollapsed}
                            disableHoverListener={!sidebarCollapsed}
                            disableInteractive={!sidebarCollapsed}
                            disableTouchListener={!sidebarCollapsed}
                            placement={"right"}
                            title={"Overview Dashboard"}>
                            <Box width={"100%"}>
                                <ListItemButton component={NavLinkTrackActive} to={`/`}>
                                    <ListItemIcon>
                                        <DashboardOutlined/>
                                    </ListItemIcon>
                                    <ListItemText>
                                        {'Overview Dashboard'}
                                    </ListItemText>
                                </ListItemButton>
                            </Box>
                        </Tooltip>
                    </ListItem>
                    <Divider sx={{mx: 2}}/>
                    <Box py={2} className={"sidebar-nav-title"}>
                        {'Focused Dashboards'}
                    </Box>
                    <ListItem>
                        <Tooltip
                            disableFocusListener={!sidebarCollapsed}
                            disableHoverListener={!sidebarCollapsed}
                            disableInteractive={!sidebarCollapsed}
                            disableTouchListener={!sidebarCollapsed}
                            placement={"right"}
                            title={"Assets"}>
                            <Box width={"100%"}>
                                <ListItemButton component={NavLinkTrackActive} to={`/Dashboard/Assets`}>
                                    <ListItemIcon>
                                        <Devices/>
                                    </ListItemIcon>
                                    <ListItemText>
                                        {"Assets"}
                                    </ListItemText>
                                </ListItemButton>
                            </Box>
                        </Tooltip>
                    </ListItem>
                    <ListItem>
                        <Tooltip
                            disableFocusListener={!sidebarCollapsed}
                            disableHoverListener={!sidebarCollapsed}
                            disableInteractive={!sidebarCollapsed}
                            disableTouchListener={!sidebarCollapsed}
                            placement={"right"}
                            title={"Finance"}>
                            <Box width={"100%"}>
                                <ListItemButton component={NavLinkTrackActive} to={`/Dashboard/Finance`}>
                                    <ListItemIcon>
                                        <AccountBalance/>
                                    </ListItemIcon>
                                    <ListItemText>
                                        {"Finance"}
                                    </ListItemText>
                                </ListItemButton>
                            </Box>
                        </Tooltip>
                    </ListItem>
                    <ListItem>
                        <Tooltip
                            disableFocusListener={!sidebarCollapsed}
                            disableHoverListener={!sidebarCollapsed}
                            disableInteractive={!sidebarCollapsed}
                            disableTouchListener={!sidebarCollapsed}
                            placement={"right"}
                            title={"Contracts"}>
                            <Box width={"100%"}>
                                <ListItemButton component={NavLinkTrackActive} to={`/Dashboard/Contracts`}>
                                    <ListItemIcon>
                                        <Description/>
                                    </ListItemIcon>
                                    <ListItemText>
                                        {"Contracts"}
                                    </ListItemText>
                                </ListItemButton>
                            </Box>
                        </Tooltip>
                    </ListItem>
                    <Divider sx={{mx: 2}}/>
                    <Box py={2} className={"sidebar-nav-title"}>
                        {'My Dashboards'}
                    </Box>
                    {
                        savedDashBoardsTemp?.map((item, index) => (
                            <ListItem key={index}>
                                <Tooltip
                                    disableFocusListener={!sidebarCollapsed}
                                    disableHoverListener={!sidebarCollapsed}
                                    disableInteractive={!sidebarCollapsed}
                                    disableTouchListener={!sidebarCollapsed}
                                    placement={"right"}
                                    title={item.label}>
                                    <Box width={"100%"}>
                                        <ListItemButton component={NavLinkTrackActive} to={`/Dashboard/${item.filter}`}>
                                            <ListItemIcon>
                                                <DashboardCustomize/>
                                            </ListItemIcon>
                                            <ListItemText>
                                                {item.label}
                                            </ListItemText>
                                        </ListItemButton>
                                    </Box>
                                </Tooltip>
                            </ListItem>
                        ))
                    }
                    <Divider sx={{mx: 2}}/>
                    <ListItem>
                        <Tooltip
                            disableFocusListener={!sidebarCollapsed}
                            disableHoverListener={!sidebarCollapsed}
                            disableInteractive={!sidebarCollapsed}
                            disableTouchListener={!sidebarCollapsed}
                            placement={"right"}
                            title={"Report Incident"}>
                            <Box width={"100%"}>
                                <ListItemButton component={NavLinkTrackActive} to={`/serviceNow`}>
                                    <ListItemIcon>
                                        <HomeRepairService/>
                                    </ListItemIcon>
                                    <ListItemText>
                                        {"Report Incident"}
                                    </ListItemText>
                                </ListItemButton>
                            </Box>
                        </Tooltip>
                    </ListItem>
                </List>
            </Stack>
        </SwipeableDrawer>
    );

}