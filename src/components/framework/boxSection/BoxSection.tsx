import React from "react";
import classNames from "classnames";
import {Box, SxProps, Theme} from "@mui/material";

export interface BoxSectionProps {
    children?: React.ReactNode,
    className?: string,
    padding?: "md" | "sm" | "xs" | "none",
    top?: boolean,
    bottom?: boolean,
    actions?: boolean,
    row?: boolean,
    noMargin?: boolean,
    transparent?: boolean,
    ref?: React.RefObject<any>,
    sx?: SxProps<Theme>,
}

const defaultBoxStyle: SxProps<Theme> = {
    borderRadius: 2,
    mb: 2,
    position: "relative",
    overflow: "hidden",
    "&.row": {
        display: "flex",
        flexDirection: "row",
        flexWrap: "nowrap",
    },
    "&.transparent": {
        backgroundColor: "transparent",
        boxShadow: "none",
    },
    "&.section-header": {
        borderBottomRightRadius: "0",
        borderBottomLeftRadius: "0",
        borderBottom: "1px",
        borderBottomStyle: "solid",
        borderBottomColor: "background.default",
        px: 2,
        mb: 0,
        "h1": {
            fontSize: {xs: 18, sm: 22, md: 32}
        },
        ".MuiButton-startIcon": {
            mr: {xs: 0, sm: 1},
            ml: {xs: 0},
        },
        ".MuiButton-root": {
            fontSize: {xs: 0, sm: 14, md: "initial"},
        },
        '.button-back': {
            width: 50,
            height: 50,
            margin: "auto 0"
        },
    },
    "&.section-body": {
        borderTopRightRadius: "0",
        borderTopLeftRadius: "0",
    },
    "&.section-actions": {
        p: 2,
        ".form-buttons": {
            m: 0,
        }
    },
    "h1, h2, h3, h4, h5": {
        color: "secondary.main",
        mt: 1,
        mb: 1,
    },
    ".box-section-h": {
        m: 0,
        px: 5,
        py: 1,
    },
    ".box-section-b": {
        m: 0,
        px: 5,
        py: 2,
    },
};

export const BoxSection = (props: BoxSectionProps) => {
    const {className, actions, children, top, bottom, transparent, noMargin, row, sx, ...rest} = props;


    const pageSectionClass = classNames(
        "box-section",
        {"section-header": top},
        {"section-body": bottom},
        {"section-actions": actions},
        {"transparent": transparent},
        {"row": row},
        className,
    );

    const boxStyle: SxProps<Theme> = {
        margin: noMargin ? 0 : "auto",
        backgroundColor: "accentBackground.main",

        ...defaultBoxStyle, ...sx
    };


    return (
        <Box className={pageSectionClass} sx={boxStyle} {...rest}>
            {children}
        </Box>
    );
};

export const BoxSectionBody = (props: BoxSectionProps) => {
    const {noMargin, ...rest} = props;
    return (
        <BoxSection className={"box-section-b"}
                    sx={{marginTop: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                    {...rest}/>
    );
};


/**
 * Convenience component that renders a PageSection designed for a header
 */

export const BoxSectionHeader = (props: BoxSectionProps) => {
    const {row = true, transparent = true, noMargin, top, className, ...rest} = props;

    return (
        <BoxSection top
                    transparent={transparent}
                    row={row}
                    noMargin
                    sx={{p: 1}}
                    className={`box-section-h`}
                    {...rest}/>
    );
};
