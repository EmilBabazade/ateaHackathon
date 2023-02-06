import React from "react";
import {Link, LinkProps} from "react-router-dom";
import {Box, SxProps, Theme} from "@mui/material";

export interface StyledLinkProps extends LinkProps {
    sx?: SxProps<Theme>
}


const defaultLinkStyle: SxProps<Theme> = {
    "a": {
        color: "primary.main",
    }
}


export const StyledLink = (props: StyledLinkProps) => {
    const {sx, ...rest} = props;

    return (
        <Box className={"styled-link"} sx={{...defaultLinkStyle, ...sx}}>
            <Link {...rest}/>
        </Box>
    )
}