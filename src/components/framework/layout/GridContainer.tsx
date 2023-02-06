import React from "react";
import {Grid2Props, SxProps, Theme} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import classNames from "classnames";

export interface GridContainerProps extends Grid2Props {

}

const gridContainerStyle: SxProps<Theme> | any = {
    px: 2,
    ".box-section": {
        ".box-section-b": {
            px: {xs: 2, lg: 3},
            py: {xs: 2, lg: 3},
        },
    }
};


export function GridContainer(props: GridContainerProps){
    const {className, spacing = 2, container = true, sx, ...rest} = props;

    const c = classNames(className, "grid-container");

    return (
        <Grid2 container={container} spacing={spacing} className={c} sx={{...gridContainerStyle, ...sx}} {...rest}/>
    )
}


export interface GridItemProps extends Grid2Props {

}

export function GridItem(props: GridItemProps){
    const {className, spacing = 2, container = false, xs = 12, lg = 6, sx, ...rest} = props;

    const c = classNames(className, "grid-item")

    return (
        <Grid2 container={container} spacing={spacing} className={c} xs={xs} lg={lg} {...rest}/>
    )
}