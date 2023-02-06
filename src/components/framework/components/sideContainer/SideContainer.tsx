import * as React from 'react';
import {Box, SxProps, Theme} from "@mui/material";

export interface SideContainerProps {
    side?: 'left' | 'right' | 'none',
    className?: string,
    fluid?: boolean,
    color?: string,
    children?: React.ReactNode,
    sx?: SxProps<Theme>
}

/**
 * Container for items you want to show on a dark panel that appears to be snapped to the side of the screen.
 */
export const SideContainer = (props: SideContainerProps) => {
    const {
        side = 'left',
        className,
        fluid,
        color = 'light',
        children,
        sx,
    } = props;

    const style: SxProps | any = {
        padding: {xs: "90px 20px", md: 10},
        width: {xs: "100%", md: "640px"},
        backgroundColor: "accentBackground.main",
        mx: {xs: 0, md: 2, lg: 3},
        borderTopRightRadius: (theme: Theme) => side === "left" ? {xs: 0, md: 5} : 0,
        borderBottomRightRadius: (theme: Theme) => side === "left" ? {xs: 0, md: 5} : 0,
        borderTopLeftRadius: (theme: Theme) => side === "right" ? {xs: 0, md: 5} : 0,
        borderBottomLeftRadius: (theme: Theme) => side === "right" ? {xs: 0, md: 5} : 0,
        "h1": {
            fontSize: {xs: 20, md: 24, lg: 36}
        },
        ...sx
    };

    return (
        <Box display={'flex'} alignItems={"center"} justifyContent={side === 'left' ? 'flex-start' : 'flex-end'}
            sx={{width: "100%", height: "100%", position: "relative", pt: {xs: 0, md: 2}, pb: {xs: 0, sm: 2, md: 2}}}>
            <Box sx={style} className={`side-container ${className ?? ''}`}>
                {children}
            </Box>
        </Box>
    );
};