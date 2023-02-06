import { jsx as _jsx } from "react/jsx-runtime";
import { BoxSection } from "../boxSection/BoxSection";
import { Overlay } from "./overlay/Overlay";
import { Box } from "@mui/material";
const mainCardStyle = {
    position: "relative",
    overflow: "hidden",
    m: 0,
    p: 0,
    borderRadius: { xs: 0, sm: 2 },
    height: "75vh",
    ".landing-search": {
        "maxWidth": { sm: "100%", md: "60vh" },
    },
    "h1": {
        fontSize: { xs: "26px", sm: "36px" },
        fontWeight: 600,
        color: "accentText.main",
        marginBottom: { xs: 2, sm: 3 },
    },
    "h5": {
        fontSize: { xs: "20px", sm: "25px" },
        color: "accentText.main",
        marginBottom: { xs: 2, md: 3 },
    },
    ".overlay": {
        overflow: "hidden",
        borderRadius: { xs: 0, sm: 2 },
    },
    ".search-input-base": {
        mt: 2,
    },
    ".image": {
        borderRadius: { xs: 0, sm: 2 },
        width: "100%",
        height: "100%",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
    },
    ".more-info": {
        fontSize: 18,
        display: "flex",
        alignItems: "center",
        ".MuiSvgIcon-root": {
            mr: 1,
        },
    },
    '.emphasis': {
        textDecorationStyle: "underline",
        textDecorationColor: "secondary.main",
        fontStyle: "italic",
        fontWeight: 600
    },
    ".links-bottom": {
        marginBottom: { xs: 2, sm: 2, md: 0 },
        marginLeft: 1,
        bottom: 0,
        left: 0,
        position: "absolute",
        width: { xs: "auto", sm: "100%" },
        "a": {
            maxWidth: "fit-content",
            borderBottom: "1px solid transparent",
            display: "flex",
            alignItems: "center",
            color: "accentText.main",
            textDecoration: "none",
            transition: (theme) => theme.transitions.create("border-bottom-color", {
                duration: theme.transitions.duration.shortest,
            }),
            ".MuiSvgIcon-root": {
                mr: 1,
            },
            ".MuiTypography-button, MuiSvgIcon-root": {
                fontSize: { xs: 16, lg: 18 },
            },
            "&:hover": {
                borderColor: "accentText.main",
                transition: (theme) => theme.transitions.create("border-bottom-color", {
                    duration: theme.transitions.duration.shortest,
                }),
            },
        }
    }
};
export function MainCard(props) {
    const { children, className, overlayBoxProps, sx } = props;
    return (_jsx(Box, Object.assign({ className: "main-card-container", sx: Object.assign({ pl: { "xs": 0, "md": 2 }, pr: { "xs": 0, "md": 2 } }, sx) }, { children: _jsx(BoxSection, Object.assign({ noMargin: true, className: `main-card ${className !== null && className !== void 0 ? className : ""}`, sx: mainCardStyle }, { children: _jsx("div", Object.assign({ className: "image" }, { children: _jsx(Overlay, Object.assign({}, overlayBoxProps, { children: children })) })) })) })));
}
