import React from "react";
import {AppBar, Box, Grid, makeStyles, Toolbar, Typography} from "@material-ui/core";
import {Link} from "react-router-dom";
import {MainContainer} from "./MainContainer";
import {deepOrange, deepPurple, lightGreen} from "@material-ui/core/colors";



export function Dashboard(props) {
    const {children} = props;

    const classes = makeStyles((theme) => ({
        dashboard: {
            borderRadius: 5,
            borderWidth: 1,
            borderStyle: "solid",
            width: "100%",
            height: "100%",
        }
    }));

    return (
        <Box p={2} className={`dashboard-container ${classes.dashboard}`}>
            <Typography variant={"h2"}>
                {"Overview"}
            </Typography>
            <Box display={"flex"} alignItems={"flex-start"} justifyContent={"center"}>
                {children}
            </Box>
        </Box>
    )
}