import React from "react";
import classNames from "classnames";
import {Box, FormLabel, Stack, SxProps, Theme} from "@mui/material";

export interface FormSectionProps {
    label?: string,
    className?: string,
    children?: React.ReactNode,
    row?: boolean,
    margin?: number,
    padding?: number,
}

export const FormSection = (props: FormSectionProps) => {

    const {label, className, margin = 2, padding = 1, row, children} = props;

    const formSectionClass = classNames(
        "form-section",
        className,
    );

    const boxStyle: SxProps = React.useMemo(() => (
        {
            display: "flex",
            marginBottom: margin,
            paddingBottom: padding,
            justifyContent: {
                xs: "center",
                md: "start",
            },
            flexWrap: "nowrap",
            flexDirection: row ? "row" : "column",
            marginTop: "10px",
            ".form-section-header": {
                width: "100%",
                margin: "10px 0 20px",
                borderBottom: "1px solid",
                borderColor: "secondary.main",
                lineHeight: "0.1em",
            },
            ".form-separator": {
                borderBottom: "1px solid",
                borderColor: "secondary.main",
            },

            ".form-section-label": {
                fontWeight: 600,
                mr: "1em",
                fontSize: 14,
                whiteSpace: "nowrap",
                color: "primary.main"
            },
        }
    ), [margin, padding, row]);

    return (
        <Box className={"form-section-container"} sx={boxStyle}>
            <Box sx={{display: "flex", flexDirection: "row", flexWrap: "nowrap"}}>
                {label && (
                    <Box className={"form-section-label"} component={"span"}>{label}</Box>
                )}
                <div className={"form-section-header"}/>
            </Box>
            <Box
                sx={{pt: 1, pb: 1}}
                className={formSectionClass}>
                {children}
            </Box>
        </Box>
    );
};


export interface StyledFormProps extends React.HTMLProps<HTMLFormElement> {
    [key: string]: any;

    color?: string,
}


const styledFormStyle: SxProps<Theme> = {
    ".styled-form": {
        ".MuiInputAdornment-root": {
            ".MuiFormControlLabel-label": {
                "fontSize": "0.9rem",
            }
        },

        ".MuiInputAdornment-positionEnd": {
            ".MuiFormControlLabel-root": {
                marginRight: 0,
            }
        },

        ".form-section-container:last-child": {
            marginBottom: 0
        }
    }
};


export const StyledForm = (props: StyledFormProps) => {

    const {
        children,
        inline,
        tag,
        innerRef,
        className,
        cssModule,
        ...rest
    } = props;

    const c = classNames(
        "styled-form",
        className,
    );

    return (
        <Box sx={styledFormStyle}>
            <form className={c}
                  onSubmit={(e) => e.preventDefault()}
                  {...rest}>
                {children}
            </form>
        </Box>
    );
};
