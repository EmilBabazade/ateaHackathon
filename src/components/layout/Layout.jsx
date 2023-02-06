import React from "react";
import {MainContainer} from "./MainContainer";
import {Box} from "@mui/material";


const layoutStyle = {
    ".app-header": {
    }
}

export function Layout(props) {
    const {children} = props;

    return (

        <main className={"app"}>
            <Box fluid className={"contents"}>
                {children}
            </Box>
        </main>
    )
}