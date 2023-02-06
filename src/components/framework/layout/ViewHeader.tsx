import {Box, BoxProps, Container, SxProps, Theme, Typography} from "@mui/material";
import classNames from "classnames";
import React from "react";
import Grid2 from "@mui/material/Unstable_Grid2";
import {ConditionalFragment} from "../../shared/conditionalFragment";
import {LoadingIndicator} from "../../components/shared/LoadingIndicator";
import {AlertOnErrors} from "../../shared/alertOnErrors";


export interface ViewHeaderProps extends BoxProps {
    bottomPadding?: boolean,
}

/**
 * Container for the top-most part of a view page
 */
export const ViewHeader = (props: ViewHeaderProps) => {
    const {children, className, bottomPadding, sx, ...rest} = props;

    const viewHeaderClass = classNames(
        "view-header",
        className,
    );

    const viewHeaderStyle: SxProps<Theme> = React.useMemo(() => ({
        pt: 5,
        pl: 5,
        pr: 5,
        pb: bottomPadding ? 5 : 0,
        backgroundColor: "accentBackground.main",
        borderRadius: 2,
        "h3": {
            fontSize: {xs: 20, md: 24},
        },
        "h5": {
            fontSize: {xs: 16, md: 18},
            fontWeight: "500",
        },
        ...sx,
    }), [bottomPadding, sx])

    return (
        <Container maxWidth={"xl"}>
            <Box className={viewHeaderClass} sx={viewHeaderStyle} {...rest}>
                {children}
            </Box>
        </Container>
    );
};


/**
 * Common component for a view title located in view Header
 */
export interface ViewTitleProps {
    title?: string | React.ReactNode,
    subtitle?: string | React.ReactNode,
    isLoading?: boolean,
    errors?: string[]
}

export const ViewTitle = (props: ViewTitleProps) => {
    const {title, subtitle, errors, isLoading = false} = props;

    return (
        <Grid2 container display={"flex"}>
            <Grid2 xs={12} sm={4}>
                <Typography variant={"h3"} textAlign={{xs: "center", sm: "left"}}>
                    {title}
                </Typography>
            </Grid2>
            <Grid2 xs>
                <ConditionalFragment showIf={isLoading}>
                    <LoadingIndicator/>
                </ConditionalFragment>
            </Grid2>
            <Grid2 xs={12} sm={4}>
                <Typography variant={"h5"} textAlign={{xs: "center", sm: "right"}}>
                    {subtitle}
                </Typography>
            </Grid2>
            <Grid2 xs={12}>
                <AlertOnErrors errors={errors}/>
            </Grid2>
        </Grid2>
    )
}