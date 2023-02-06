import * as React from 'react';
import {Box, SxProps, Theme} from "@mui/material";

const navbarBrandStyle: SxProps<Theme> = {
    height: "100px",
    minWidth: "110px",
    maxWidth: "350px",
    backgroundSze: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPositionX: "center",
    backgroundPositionY: "center",
    backgroundClip: "padding-box",

    ".navbar-brand-full": {
        width: "100%",
        height: "100%",
        backgroundImage: `url(/atea-logotype.png)`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPositionX: "center",
        backgroundPositionY: "center",
    }
};

export const AppNavbarBrand = () => {
    return (
        <Box className="navbar-brand-container" sx={navbarBrandStyle}>
            <div className="navbar-brand-full"/>
        </Box>
    );
};