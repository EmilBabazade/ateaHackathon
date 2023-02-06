import React from 'react';
import {BrowserRouter as Router, NavLink, Route, Routes} from 'react-router-dom';
import {AppBar, Box, CssBaseline, Divider, List, ListItem, makeStyles, PaletteMode, Theme, ThemeProvider, Toolbar} from "@mui/material";
import './assets/App.css';
import {Layout} from "./components/layout/Layout";
import {getTheme} from "./components/configuration/themeConfig";
import {Dashboard} from "./components/layout/Dashboard";
import {ServiceNowForm} from "./components/layout/ServiceNowForm";
import {Header} from "./components/layout/Header";
import {RecoilRoot} from "recoil";
import {ThemeColorContext} from './components/configure/configureAppContext';
import {MainContainer} from "./components/framework/layout/MainContainer";

const baseUrl = "/"

const App = () => {
    const [darkMode, setDarkMode] = React.useState<boolean>(false);

    const [selectedDashboard, setSelectedDashBoard] = React.useState<string | undefined>();

    const theme = React.useMemo(() => getTheme(darkMode), [darkMode, getTheme]);

    const colorMode = React.useMemo(
        () => ({
            // The dark mode switch would invoke this method
            toggleColorMode: () => {
                setDarkMode((isDarkMode) =>
                    !isDarkMode
                );
            },
            colorMode: darkMode ? "dark" : "light" as PaletteMode,
        }),
        [darkMode, setDarkMode],
    );


    return (
        <Router basename={baseUrl}>
            <RecoilRoot>
                <ThemeProvider theme={theme}>
                    <ThemeColorContext.Provider value={colorMode}>
                        <CssBaseline>
                            <Layout>
                                <MainContainer fluid className="content" >
                                    <Routes>
                                        <Route path="/" element={<Dashboard/>}/>
                                        <Route path="/dashboard/:filter" element={<Dashboard/>}/>
                                        <Route path="/serviceNow" element={<ServiceNowForm/>}/>
                                    </Routes>
                                </MainContainer>
                            </Layout>
                        </CssBaseline>
                    </ThemeColorContext.Provider>

                </ThemeProvider>
            </RecoilRoot>
        </Router>
    );
};


export default App;
