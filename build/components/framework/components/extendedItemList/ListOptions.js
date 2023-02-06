import { jsx as _jsx } from "react/jsx-runtime";
import { Box } from "@mui/material";
import { BoxSection } from "../../boxSection/BoxSection";
export function ListOptions(props) {
    const { children, sx } = props;
    return (_jsx(BoxSection, { children: _jsx(Box, Object.assign({ className: "list-options", padding: "none", sx: Object.assign({ width: "100%", px: 2, py: { xs: 2, md: 3 } }, sx) }, { children: children })) }));
}
