import React from "react";
import {Box, BoxProps, SxProps} from "@mui/material";



const overlayStyle: SxProps = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: 100,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    color: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
}

export const Overlay = (props: BoxProps) => {
    return (
        <Box display={"flex"} sx={overlayStyle} className={"overlay"} {...props}>
            {props.children}
        </Box>
    )
}