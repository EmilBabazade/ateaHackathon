import React from "react";
import classNames from "classnames";
import {Dialog, DialogProps, SxProps, Theme, useMediaQuery} from "@mui/material";




/**
 * Shared modal component with some common styling
 */
export function StyledModal(props: DialogProps) {
    const {className, sx, maxWidth = "md", fullWidth = true, ...other} = props;

    const isMd = useMediaQuery((theme: Theme) => theme.breakpoints.up("md"));

    const c = classNames('styled-modal', className);
    const dialogStyle: SxProps<Theme> = {
        "& .MuiDialogTitle-root": {
            padding: 3,
            color: "secondary.main",
        },
        '& .MuiDialogContent-root': {
            padding: 3,
        },
        '& .MuiDialogActions-root': {
            padding: 3,
            justifyContent: "flex-start"
        },
        '& .MuiDialog-paper': {
            margin: 0,
        },
        '.form-buttons': {
            width: "100%",
            ".ms-auto": {
                ml: "auto",
            }
        },
        ...sx
    }

    return (
        <Dialog className={c}
                fullScreen={!isMd}
                maxWidth={maxWidth}
                fullWidth={fullWidth}
                sx={{...dialogStyle}}
                {...other}/>
    );
}