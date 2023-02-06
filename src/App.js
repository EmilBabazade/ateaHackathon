import React from 'react';
import {HashRouter as Router, NavLink, Route} from 'react-router-dom';

import Home from './Home';
import FormView from './FormView';
import ReactAsView from './ReactAsView';
import ReduxAppView from './redux/ReduxAppView';
import {AppBar, Box, CssBaseline, List, ListItem, makeStyles, ThemeProvider, Toolbar} from "@material-ui/core";
import './assets/App.css';
import {Layout} from "./components/layout/Layout";
import {getTheme} from "./components/configuration/themeConfig";
import {deepOrange, deepPurple, lightGreen} from "@material-ui/core/colors";
import {Dashboard} from "./components/layout/Dashboard";


const App = () => {
    const [darkMode, setDarkMode] = React.useState(false);

    const theme = React.useMemo(() => getTheme(darkMode), [darkMode, getTheme]);
    const classes = makeStyles((theme) => ({
        root: {
            display: 'flex',
            '& > *': {
                margin: theme.spacing(1),
            },
        },
        orange: {
            color: theme.palette.getContrastText(deepOrange[500]),
            backgroundColor: deepOrange[500],
        },
        purple: {
            color: theme.palette.getContrastText(deepPurple[500]),
            backgroundColor: deepPurple[500],
        },
        green: {
            color: theme.palette.getContrastText(lightGreen[500]),
            backgroundColor: lightGreen[500],
        },
        header: {
            backgroundColor: "white !important",
            borderBottom: "1px solid grey",
            color: theme.palette.secondary.main,
            height: "100px"
        },
        sidebar: {}
    }));


    console.log(theme);


    return (
        <ThemeProvider theme={theme}>
            <CssBaseline>
                <div>
                    <AppBar position={"static"} elevation={2} className={classes.header}>
                        <Toolbar>
                            <Box mr={4}>
                                <Box>
                                    <h2>Logo Here</h2>
                                </Box>
                            </Box>
                        </Toolbar>
                    </AppBar>

                    <Layout>
                        <Router>
                            <Box>
                                <div className='content-box'>
                                    <List className={"menu"}>
                                        <ListItem>
                                            <NavLink to="/" exact activeClassName='active'>Home</NavLink>
                                        </ListItem>
                                        <ListItem>
                                            <NavLink to="/webix" activeClassName='active'>Webix Component</NavLink><
                                            /ListItem>
                                    </List>
                                    <div className='content'>
                                        <Route exact path="/" component={Dashboard}/>
                                        <Route path="/webix" component={FormView}/>
                                        <Route path="/data" component={ReduxAppView}/>
                                        <Route path="/view" component={ReactAsView}/>
                                    </div>
                                </div>
                                <div className='footer'>
                                    <p>Get more info at <a target='blank' href='http://webix.com'>http://webix.com</a></p>
                                </div>
                            </Box>
                        </Router>
                    </Layout>
                </div>
            </CssBaseline>
        </ThemeProvider>
    )
}


export default App;
