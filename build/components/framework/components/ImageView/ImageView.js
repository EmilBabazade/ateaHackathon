import { jsx as _jsx } from "react/jsx-runtime";
import { Box } from "@mui/material";
import { Image } from "@mui/icons-material";
export const ImageView = (props) => {
    return (_jsx(Box, Object.assign({ sx: Object.assign({ "img": {
                textAlign: "center",
                objectFit: "contain",
                maxWidth: "100%",
                maxHeight: "100%",
            } }, props.sx) }, { children: !props.src ? (_jsx(Box, Object.assign({ sx: { fontSize: 54 } }, { children: _jsx(Image, { fontSize: "inherit" }) }))) : (_jsx("img", { className: "img-view", src: props.src, alt: props.alt })) })));
};
