import * as React from 'react';
import {Box, LinearProgress, styled, Theme, useMediaQuery} from "@mui/material";
import {AppSidebar} from './Sidebar';
import {Header} from "./Header";
import { AppContextProvider } from '../configure/configureAppContext';

// import {Footer} from "./Footer";


export interface LayoutProps {
    children: React.ReactNode
}

interface MainStyleProps {
    open?: boolean;
    collapsed?: boolean;
    isDesktop?: boolean;
    drawerWidth?: string;
}

const Main = styled('main', {
    shouldForwardProp: (prop) => prop !== 'open'
        && prop !== 'collapsed'
        && prop !== 'isDesktop'
        && prop !== 'drawerWidth'
})<MainStyleProps>(({theme, open, drawerWidth, isDesktop}) => ({
    flexGrow: 1,
    transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: isDesktop ? `${drawerWidth}` : 'initial',
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
    ...(open && {
        marginLeft: isDesktop ? `${drawerWidth}` : 'initial',
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

export const Layout = (props: LayoutProps) => {


    const [debugOpen, setDebugOpen] = React.useState<boolean>(false);
    const [sidebarOpen, setSidebarOpen] = React.useState<boolean>(false);
    const [sidebarCollapsed, setSidebarCollapsed] = React.useState<boolean>(false);


    const isDesktopLayout = useMediaQuery((theme: Theme) => theme.breakpoints.up('md'));
    const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.up('sm'));

    const drawerWidth: string = React.useMemo(() => (sidebarCollapsed
        ? "60px"
        : isMobile ? "250px" : "90%"), [isMobile, sidebarCollapsed]);

    // on location change, close the sidebar unless it's required

    React.useEffect(() => {
        setSidebarOpen && setSidebarOpen(isDesktopLayout);
    }, [isDesktopLayout, setSidebarOpen]);

    React.useEffect(() => {

        if (window.location.host.includes('localhost')) {
            setDebugOpen(true);
        } else {
            setDebugOpen(false);
        }

    }, [window.location]);

    return (
        <AppContextProvider value={{
            sidebarOpen: sidebarOpen,
            setSidebarOpen: setSidebarOpen,
            debugOpen: debugOpen,
            setDebugOpen: setDebugOpen,
            sidebarCollapsed: sidebarCollapsed,
            setSidebarCollapsed: setSidebarCollapsed
        }}>
            <Box className="app">
                <AppSidebar drawerWidth={drawerWidth}/>
                <Main open={sidebarOpen} drawerWidth={drawerWidth} collapsed={sidebarCollapsed}
                      isDesktop={isDesktopLayout}>
                    <Header/>
                    <React.Suspense fallback={<LinearProgress/>}>
                        {props.children}
                    </React.Suspense>

                </Main>

            </Box>
        </AppContextProvider>
    );
};





export function Layout1(props: {children: React.ReactNode}) {
    const {children} = props;

    return (

        <main className={"app"}>
            <Box className={"contents"}>
                {children}
            </Box>
        </main>
    )
}