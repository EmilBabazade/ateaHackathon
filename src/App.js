import React from 'react';
import {HashRouter as Router, NavLink, Route} from 'react-router-dom';
import {AppBar, Box, CssBaseline, Divider, List, ListItem, makeStyles, ThemeProvider, Toolbar} from "@material-ui/core";
import './assets/App.css';
import {Layout} from "./components/layout/Layout";
import {getTheme} from "./components/configuration/themeConfig";
import {deepOrange, deepPurple, lightGreen} from "@material-ui/core/colors";
import {Dashboard} from "./components/layout/Dashboard";
import {ServiceNowForm} from "./components/layout/ServiceNowForm";


const App = () => {
    const [darkMode, setDarkMode] = React.useState(false);

    const [selectedDashboard, setSelectedDashBoard] = React.useState()

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

    const savedDashBoardsTemp = [
        {label: "All Assets", filter: "Assets"},
        {label: "Finance", filter: "Finance"},
        {label: "Contracts", filter: "Contracts"},
    ];


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
                                        {
                                            savedDashBoardsTemp.map((d, i) => (
                                                <ListItem key={i}>
                                                    <NavLink to={`/dashboard/${d.filter}`} activeClassName='active'>{d.label}</NavLink>
                                                </ListItem>
                                            ))
                                        }
                                        <Divider/>
                                        <ListItem>
                                            <NavLink to="/serviceNow" exact activeClassName='active'>Support</NavLink>
                                        </ListItem>
                                    </List>
                                    <div className='content'>
                                        <Route exact path="/" component={Dashboard}/>
                                        <Route path="/dashboard/:filter" component={Dashboard}/>
                                        <Route path="/serviceNow" component={ServiceNowForm}/>
                                    </div>
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
