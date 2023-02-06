import { jsx as _jsx } from "react/jsx-runtime";
import { Box } from "@mui/material";
/**
 * Container for items you want to show on a dark panel that appears to be snapped to the side of the screen.
 */
export const SideContainer = (props) => {
    const { side = 'left', className, fluid, color = 'light', children, sx, } = props;
    const style = Object.assign({ padding: { xs: "90px 20px", md: 10 }, width: { xs: "100%", md: "640px" }, backgroundColor: "accentBackground.main", mx: { xs: 0, md: 2, lg: 3 }, borderTopRightRadius: (theme) => side === "left" ? { xs: 0, md: 5 } : 0, borderBottomRightRadius: (theme) => side === "left" ? { xs: 0, md: 5 } : 0, borderTopLeftRadius: (theme) => side === "right" ? { xs: 0, md: 5 } : 0, borderBottomLeftRadius: (theme) => side === "right" ? { xs: 0, md: 5 } : 0, "h1": {
            fontSize: { xs: 20, md: 24, lg: 36 }
        } }, sx);
    return (_jsx(Box, Object.assign({ display: 'flex', alignItems: "center", justifyContent: side === 'left' ? 'flex-start' : 'flex-end', sx: { width: "100%", height: "100%", position: "relative", pt: { xs: 0, md: 2 }, pb: { xs: 0, sm: 2, md: 2 } } }, { children: _jsx(Box, Object.assign({ sx: style, className: `side-container ${className !== null && className !== void 0 ? className : ''}` }, { children: children })) })));
};
