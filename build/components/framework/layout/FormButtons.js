import { jsx as _jsx } from "react/jsx-runtime";
import { Box } from "@mui/material";
const formButtonsStyle = {
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
export const FormButtons = (props) => {
    const { className, children, sx } = props;
    return (_jsx(Box, Object.assign({ className: `form-buttons ${className !== null && className !== void 0 ? className : ''}`, sx: Object.assign(Object.assign({}, formButtonsStyle), sx) }, { children: children })));
};
