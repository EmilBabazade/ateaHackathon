import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import { Box, Button, Divider, Grid, makeStyles, TextareaAutosize, TextField, Typography } from "@mui/material";
import { Email } from "@material-ui/icons";
const snModel = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    serialNumber: "",
    imei: "",
    problemDescription: "",
};
// merges changes into a new object
function changeModel(changes, original) {
    return Object.assign(Object.assign({}, original), changes);
}
export function ServiceNowForm(props) {
    const { children } = props;
    const filter = params;
    console.log("params", params);
    const classes = makeStyles((theme) => ({
        dashboard: {
            borderRadius: 5,
            borderWidth: 1,
            borderStyle: "solid",
            width: "100%",
            height: "100%",
        }
    }));
    return (_jsxs(Box, Object.assign({ className: "dashboard-section" }, { children: [_jsx(Box, Object.assign({ mb: 2 }, { children: _jsx(Typography, Object.assign({ variant: "h4", color: "secondary" }, { children: "Report an Incident" })) })), _jsx(Box, Object.assign({ p: 2, className: `dashboard-container` }, { children: _jsx(Box, Object.assign({ width: "100%" }, { children: _jsx("form", Object.assign({ className: "sn-form" }, { children: _jsx(Box, Object.assign({ width: 650 }, { children: _jsxs(Grid, Object.assign({ container: true, spacing: 1 }, { children: [_jsx(Grid, Object.assign({ xs: 12 }, { children: _jsxs(Box, Object.assign({ p: 2 }, { children: [_jsx(Divider, {}), _jsx("strong", { children: "Personal Details" })] })) })), _jsx(Grid, Object.assign({ xs: 12, sm: 6, md: 6, lg: 6 }, { children: _jsx(TextField, { variant: "outlined", label: "First Name" }) })), _jsx(Grid, Object.assign({ xs: 12, sm: 6, md: 6, lg: 6 }, { children: _jsx(TextField, { variant: "outlined", label: "Last Name" }) })), _jsx(Grid, Object.assign({ xs: 12, sm: 6, md: 6, lg: 6 }, { children: _jsx(TextField, { variant: "outlined", label: "Phone" }) })), _jsx(Grid, Object.assign({ xs: 12, sm: 6, md: 6, lg: 6 }, { children: _jsx(TextField, { variant: "outlined", label: "Email" }) })), _jsx(Grid, Object.assign({ xs: 12 }, { children: _jsxs(Box, Object.assign({ p: 2 }, { children: [_jsx(Divider, {}), _jsx("strong", { children: "Problem Description" })] })) })), _jsx(Grid, Object.assign({ xs: 12, sm: 6, md: 6, lg: 6 }, { children: _jsx(TextField, { variant: "outlined", label: "Serial Number" }) })), _jsx(Grid, Object.assign({ xs: 12, sm: 6, md: 6, lg: 6 }, { children: _jsx(TextField, { variant: "outlined", label: "Imei" }) })), _jsx(Grid, Object.assign({ xs: 12 }, { children: _jsx(TextareaAutosize, { variant: "outlined", name: "description", className: "large-textfield", label: "Problem Description", minRows: 15 }) })), _jsx(Grid, Object.assign({ xs: 12 }, { children: _jsx(Box, Object.assign({ width: "100%", display: "flex", color: "secondary", alignItems: "center", justifyContent: "flex-end" }, { children: _jsx(Button, Object.assign({ variant: "outlined", startIcon: _jsx(Email, {}) }, { children: "Send" })) })) }))] })) })) })) })) }))] })));
}
