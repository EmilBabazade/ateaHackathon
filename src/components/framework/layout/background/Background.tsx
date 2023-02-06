
import * as React from 'react';
import classNames from "classnames";
import {Box, SxProps, Theme} from "@mui/material";

export interface BackgroundProps {
    children?: React.ReactNode,
    className?: string,
    centerChildren?: 'vertically' | 'horizontally',
    isDark?: boolean,
    sx?: SxProps<Theme>,
}

const backgroundStyle: SxProps<Theme> = {
    width: "100%",
    backgroundColor: "background.default",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
    height: "auto",
    minHeight: "100vh",
}

/**
 * Background for making the back of screens look nicer.
 * @param props
 */
export const Background = (props: BackgroundProps) => {
    const {children, className, isDark, centerChildren, sx} = props;

    const backgroundClass = classNames(
        "background",
        className,
        centerChildren ? `background-center-children-${centerChildren}` : '',
        {"dark": isDark},
    );


    return (
        <>
            <Box className={backgroundClass} sx={{...backgroundStyle, ...sx}}>
                {children}
            </Box>
        </>
    );
};