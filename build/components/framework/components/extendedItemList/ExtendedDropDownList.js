import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { FormControl, FormHelperText, InputLabel, MenuItem, OutlinedInput, Select } from "@mui/material";
export function ExtendedDropDownList(props) {
    const { className, name, validationErrors, label, helpText, required, value, data, append, prepend, menuItemEnd, itemLabel, idField, emptyValue = "", renderValue, onBlur, onChange, readOnly, } = props;
    const onItemChanged = (event) => {
        const { target: { value }, } = event;
        onChange && onChange(value);
    };
    // Find the errors based on the types we support.
    let errors = [];
    if (!validationErrors) {
        // Errors can stay as an empty array.
    }
    else if (typeof validationErrors === 'string') {
        errors = [validationErrors];
    }
    else if (Array.isArray(validationErrors)) {
        errors = validationErrors;
    }
    else {
        // We have ValidationErrors from Validator.errors()
        errors = validationErrors[(props.name ? props.name : '')] || [];
    }
    return (_jsxs(FormControl, Object.assign({ className: className, id: name, fullWidth: true, margin: "dense", variant: "outlined" }, { children: [_jsx(InputLabel, Object.assign({ required: required, id: `${name}-label`, htmlFor: name }, { children: label })), _jsxs(Select, Object.assign({ id: name, required: required, value: value, label: label, readOnly: readOnly, input: _jsx(OutlinedInput, { label: label }), onBlur: (e) => onBlur && onBlur(e.target.value), onChange: (e) => onItemChanged(e), renderValue: (item) => renderValue && renderValue(data === null || data === void 0 ? void 0 : data.find(i => i.id === item)), displayEmpty: !!emptyValue, startAdornment: prepend, endAdornment: append }, { children: [data === null || data === void 0 ? void 0 : data.map((item, i) => (_jsx(MenuItem, Object.assign({ value: idField(item) }, { children: itemLabel(item) }), i))), menuItemEnd && (_jsx(MenuItem, { children: menuItemEnd }))] })), !!helpText && (_jsx(FormHelperText, { children: helpText })), !!errors.length && (_jsx(FormHelperText, { children: errors.join(',') }))] })));
}
