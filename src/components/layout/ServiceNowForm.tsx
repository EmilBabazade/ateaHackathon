import React from "react";
import {Box, Button, Grid, SxProps, Theme, Typography} from "@mui/material";
import {Email} from "@mui/icons-material";
import {BoxSection, BoxSectionBody, BoxSectionHeader} from "../framework/boxSection/BoxSection";
import {FormSection, StyledForm} from "../shared/StyledForm";
import {StyledInput} from "../shared/StyledInput";
import {FormButtons} from "../framework/layout/FormButtons";


const snModel = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    serialNumber: "",
    imei: "",
    problemDescription: "",

};

const formStyle: SxProps<Theme> = {
    borderRadius: 5,
    borderWidth: 1,
    borderStyle: "solid",
    width: "100%",
    height: "100%",
};


// merges changes into a new object
function changeModel(changes: any, original: any) {
    return {...original, ...changes};
}

export function ServiceNowForm() {


    return (
        <BoxSection className={"dashboard-section"}>
            <BoxSectionHeader>
                <Typography variant={"h4"} color={"secondary"}>
                    {"Report an Incident"}
                </Typography>
            </BoxSectionHeader>
            <BoxSectionBody>
                <Box width={"100%"}>
                    <StyledForm className={"sn-form"}>
                        <Grid container spacing={1}>
                            <Grid item xs={12} sm={6} md={6} lg={6}>
                                <FormSection label={"Personal Details"} margin={2}>
                                    <StyledInput name={"firstName"} variant={"outlined"} label={"First Name"}/>
                                    <StyledInput name={"lastName"} variant={"outlined"} label={"Last Name"}/>
                                    <StyledInput name={"phone"} variant={"outlined"} label={"Phone"}/>
                                    <StyledInput name={"email"} variant={"outlined"} label={"Email"}/>
                                </FormSection>
                            </Grid>
                            <Grid item xs={12} sm={6} md={6} lg={6}>
                                <FormSection label={"Problem Description"} margin={2}>
                                    <StyledInput name={"serialNumber"} variant={"outlined"} label={"Serial Number"}/>
                                    <StyledInput name={"imei"} variant={"outlined"} label={"Imei"}/>
                                    <StyledInput name={"problemDescription"}
                                                 label={"Problem Description"}
                                                 multiline
                                                 rows={5}/>
                                </FormSection>
                            </Grid>
                            <Grid item xs={12}>
                                <FormButtons>
                                    <Box width={"100%"} display={"flex"}
                                         color={"secondary"}
                                         alignItems={"center"} justifyContent={"flex-start"}>
                                        <Button variant={"outlined"} startIcon={<Email/>}>
                                            {"Send"}
                                        </Button>
                                    </Box>
                                </FormButtons>
                            </Grid>
                        </Grid>
                    </StyledForm>
                </Box>
            </BoxSectionBody>
        </BoxSection>

    );
}