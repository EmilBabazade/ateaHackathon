var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, Container, Typography } from "@mui/material";
import classNames from "classnames";
import React from "react";
import Grid2 from "@mui/material/Unstable_Grid2";
import { ConditionalFragment } from "../../shared/conditionalFragment";
import { LoadingIndicator } from "../../components/shared/LoadingIndicator";
import { AlertOnErrors } from "../../shared/alertOnErrors";
/**
 * Container for the top-most part of a view page
 */
export const ViewHeader = (props) => {
    const { children, className, bottomPadding, sx } = props, rest = __rest(props, ["children", "className", "bottomPadding", "sx"]);
    const viewHeaderClass = classNames("view-header", className);
    const viewHeaderStyle = React.useMemo(() => (Object.assign({ pt: 5, pl: 5, pr: 5, pb: bottomPadding ? 5 : 0, backgroundColor: "accentBackground.main", borderRadius: 2, "h3": {
            fontSize: { xs: 20, md: 24 },
        }, "h5": {
            fontSize: { xs: 16, md: 18 },
            fontWeight: "500",
        } }, sx)), [bottomPadding, sx]);
    return (_jsx(Container, Object.assign({ maxWidth: "xl" }, { children: _jsx(Box, Object.assign({ className: viewHeaderClass, sx: viewHeaderStyle }, rest, { children: children })) })));
};
export const ViewTitle = (props) => {
    const { title, subtitle, errors, isLoading = false } = props;
    return (_jsxs(Grid2, Object.assign({ container: true, display: "flex" }, { children: [_jsx(Grid2, Object.assign({ xs: 12, sm: 4 }, { children: _jsx(Typography, Object.assign({ variant: "h3", textAlign: { xs: "center", sm: "left" } }, { children: title })) })), _jsx(Grid2, Object.assign({ xs: true }, { children: _jsx(ConditionalFragment, Object.assign({ showIf: isLoading }, { children: _jsx(LoadingIndicator, {}) })) })), _jsx(Grid2, Object.assign({ xs: 12, sm: 4 }, { children: _jsx(Typography, Object.assign({ variant: "h5", textAlign: { xs: "center", sm: "right" } }, { children: subtitle })) })), _jsx(Grid2, Object.assign({ xs: 12 }, { children: _jsx(AlertOnErrors, { errors: errors }) }))] })));
};
