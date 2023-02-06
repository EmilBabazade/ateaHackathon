import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import classNames from "classnames";
import { Box } from "@mui/material";
const backgroundStyle = {
    width: "100%",
    backgroundColor: "background.default",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
    height: "auto",
    minHeight: "100vh",
};
/**
 * Background for making the back of screens look nicer.
 * @param props
 */
export const Background = (props) => {
    const { children, className, isDark, centerChildren, sx } = props;
    const backgroundClass = classNames("background", className, centerChildren ? `background-center-children-${centerChildren}` : '', { "dark": isDark });
    return (_jsx(_Fragment, { children: _jsx(Box, Object.assign({ className: backgroundClass, sx: Object.assign(Object.assign({}, backgroundStyle), sx) }, { children: children })) }));
};
