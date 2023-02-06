import * as React from 'react';

import {Link} from "react-router-dom";
import {AppBar, Avatar, Box, IconButton, makeStyles, Toolbar, useMediaQuery} from "@mui/material";
import {deepOrange, deepPurple} from "@mui/material/colors";

const headerStyle = makeStyles(theme => ({
    root: {
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
    },
}))


const useStyles = makeStyles((theme) => ({
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
}));

export const Header = () => {
    const classes = useStyles();


    return (
        <AppBar className={`header-container`}
                position={"static"}
                sx={{...headerStyle}}
        >
            <Toolbar>
                <Box sx={{mr: 4}}>
                    <Box>
                        <Link to="/">
                            <strong>Logo Here</strong>
                        </Link>
                    </Box>
                </Box>
                <Box sx={{ml: "auto"}}>
                    <Avatar className={classes.orange}>OP</Avatar>
                </Box>
            </Toolbar>
        </AppBar>
    );
};
