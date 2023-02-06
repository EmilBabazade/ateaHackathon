
import * as React from 'react';
import {Box, SxProps, Theme} from "@mui/material";

export interface FormButtonsProps {
    className?: string,
    children: React.ReactNode,
    sx?: SxProps<Theme>
}


const formButtonsStyle: SxProps<Theme> = {
    mt: 3,
    mb: 2,
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    '.MuiButton-root': {
        mr: 1,
    },
    '.btn-group': {
        mr: 1,
        '.btn': {
            mr: 0,
        }
    },
    '.MuiButton-root[type="submit"]': {
        marginLeft: "auto",
        marginRight: 0,
        minWidth: "120px",
    }
};

/**
 * Container for buttons (e.g. sumbit) at the bottom of a form.
 */
export const FormButtons = (props: FormButtonsProps) => {
    const {className, children, sx} = props;

    return (
        <Box className={`form-buttons ${className ?? ''}`} sx={{...formButtonsStyle, ...sx}}>
            {children}
        </Box>
    );
};