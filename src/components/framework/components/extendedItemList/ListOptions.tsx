import React from "react";
import {Box, SxProps, Theme} from "@mui/material";
import {BoxSection} from "../../boxSection/BoxSection";


export interface ListOptionsProps {
    children?: React.ReactNode,
    sx?: SxProps<Theme>
}

export function ListOptions(props: ListOptionsProps) {
    const {children, sx} = props;

    return (
        <BoxSection>
            <Box className={"list-options"} padding={"none"}
                 sx={{width: "100%", px: 2, py: {xs: 2, md: 3}, ...sx}}
            >
                {children}
            </Box>
        </BoxSection>

    );

}