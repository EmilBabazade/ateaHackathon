import * as React from 'react';
import {Box, CircularProgress, LinearProgress, SxProps} from "@mui/material";
import {visuallyHidden} from '@mui/utils';

export interface LoadingIndicatorProps {
    className?: string,
    fullWidth?: boolean,
    size?: 'sm' | 'md' | 'lg',
    dark?: boolean,
    linear?: boolean
}

/**
 * Simple spinner that can be shown during loading.
 */
export const LoadingIndicator = (props: LoadingIndicatorProps) => {
    const {className, fullWidth, size = "md", linear} = props;

    let indicatorSize = 16;
    switch (size) {
        case "sm":
            indicatorSize = 16;
            break;
        case "md":
            indicatorSize = 24;
            break;
        case "lg":
            indicatorSize = 32;
            break;
    }

    const containerStyle: SxProps = {
        display: "flex",
        ml: fullWidth ? 0 : 2,
        mr: fullWidth ? 0 : 2,
        width: fullWidth ? "100%" : "auto",
        alignItems: "center",
        justifyContent: "center",
        ".MuiCircularProgress-root": {
            width: indicatorSize,
            height: indicatorSize,
        }
    };


    return (

        linear ? (
            <Box className={'loading-indicator ' + (className ? className : '')} sx={{position: "absolute", top: 0, width: "100%", left: 0}}>
                <LinearProgress sx={{position: "absolute", top: 0, width: "100%", left: 0}}/>
                <Box sx={visuallyHidden} className="visually-hidden">Loading</Box>
            </Box>
        ) : (

            <Box className={'loading-indicator ' + (className ? className : '')} sx={containerStyle}>
                <CircularProgress size={size} color={"primary"}/>
                <Box sx={visuallyHidden} className="visually-hidden">Loading</Box>
            </Box>
        )

    );
};

