import React from "react";
import {AppBar, Box, Toolbar} from "@material-ui/core";
import {Link} from "react-router-dom";
import {MainContainer} from "./MainContainer";


const layoutStyle = {
    ".app-header": {
    }
}

export function Layout(props) {
    const {children} = props;

    return (

        <main className={"app"}>
            <MainContainer fluid className={"contents"}>
                {children}
            </MainContainer>
        </main>
    )
}