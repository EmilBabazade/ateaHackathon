import React from "react";
import {Box, SxProps, Theme} from "@mui/material";
import {Image} from "@mui/icons-material";

export interface ImageViewProps {
    sx?: SxProps<Theme>,
    src?: string,
    alt?: string,
}


export const ImageView = (props: ImageViewProps) => {
    return (
        <Box sx={{
            "img": {
                textAlign: "center",
                objectFit: "contain",
                maxWidth: "100%",
                maxHeight: "100%",
            },
            ...props.sx
        }}>
            {!props.src ? (
                <Box sx={{fontSize: 54}}>
                    <Image fontSize={"inherit"}/>
                </Box>
            ) : (
                <img className={"img-view"} src={props.src} alt={props.alt}/>
            )}
        </Box>
    )
}
