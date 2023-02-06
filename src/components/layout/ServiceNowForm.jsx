import React from "react";
import {Box, Button, Divider, Grid, makeStyles, TextareaAutosize, TextField, Typography} from "@mui/material";
import {Email} from "@material-ui/icons";

const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
});

const snModel = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    serialNumber: "",
    imei: "",
    problemDescription: "",

}


// merges changes into a new object
function changeModel(changes, original) {
    return {...original, ...changes};
}

export function ServiceNowForm(props) {
    const {children} = props;

    const filter = params;
    console.log("params", params)

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
        <Box className={"dashboard-section"}>
            <Box mb={2}>
                <Typography variant={"h4"} color={"secondary"}>
                    {"Report an Incident"}
                </Typography>
            </Box>
            <Box p={2} className={`dashboard-container`}>

                <Box width={"100%"}>
                    <form className={"sn-form"}>
                        <Box width={650}>
                            <Grid container spacing={1}>
                                <Grid xs={12}>
                                    <Box p={2}>
                                        <Divider/>
                                        <strong>{"Personal Details"}</strong>
                                    </Box>
                                </Grid>
                                <Grid xs={12} sm={6} md={6} lg={6}>
                                    <TextField variant={"outlined"} label={"First Name"}/>
                                </Grid>
                                <Grid xs={12} sm={6} md={6} lg={6}>
                                    <TextField variant={"outlined"} label={"Last Name"}/>
                                </Grid>
                                <Grid xs={12} sm={6} md={6} lg={6}>
                                    <TextField variant={"outlined"} label={"Phone"}/>
                                </Grid>
                                <Grid xs={12} sm={6} md={6} lg={6}>
                                    <TextField variant={"outlined"} label={"Email"}/>
                                </Grid>
                                <Grid xs={12}>
                                    <Box p={2}>
                                        <Divider/>
                                        <strong>{"Problem Description"}</strong>
                                    </Box>
                                </Grid>

                                <Grid xs={12} sm={6} md={6} lg={6}>
                                    <TextField variant={"outlined"} label={"Serial Number"}/>
                                </Grid>
                                <Grid xs={12} sm={6} md={6} lg={6}>
                                    <TextField variant={"outlined"} label={"Imei"}/>
                                </Grid>
                                <Grid xs={12}>
                                    <TextareaAutosize variant={"outlined"}
                                                      name={"description"}
                                                      className={"large-textfield"}
                                                      label={"Problem Description"}
                                                      minRows={15}>

                                    </TextareaAutosize>
                                </Grid>
                                <Grid xs={12}>
                                    <Box width={"100%"} display={"flex"}
                                         color={"secondary"}
                                         alignItems={"center"} justifyContent={"flex-end"}>
                                        <Button variant={"outlined"} startIcon={<Email/>}>
                                            {"Send"}
                                        </Button>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                    </form>
                </Box>
            </Box>
        </Box>
    )
}