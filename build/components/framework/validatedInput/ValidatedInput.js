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
import { Checkbox, FormControl, FormControlLabel, FormHelperText, InputLabel, OutlinedInput, Select, } from "@mui/material";
export const ValidatedInput = (props) => {
    const { id, variant, hideFormFeedback, fullWidth, label, name, append, prepend, inputProps, helpText, step, required, min, max } = props, rest = __rest(props, ["id", "variant", "hideFormFeedback", "fullWidth", "label", "name", "append", "prepend", "inputProps", "helpText", "step", "required", "min", "max"]);
    const shrinkLabel = !!rest.type && [
        "date",
        "datetime",
    ].includes(rest.type);
    return (_jsxs(FormControl, Object.assign({ required: required, variant: variant, fullWidth: true, margin: "dense" }, { children: [shrinkLabel ? (
            // work-around for not dealing with shrink for other types. Probably a better way to do it?
            _jsx(InputLabel, Object.assign({ htmlFor: id !== null && id !== void 0 ? id : name, shrink: true, style: { backgroundColor: "white" } }, { children: label }))) : (_jsx(InputLabel, Object.assign({ htmlFor: id !== null && id !== void 0 ? id : name }, { children: label }))), _jsx(OutlinedInput, Object.assign({}, rest, { id: id !== null && id !== void 0 ? id : name, label: props.label, endAdornment: append, startAdornment: prepend, inputProps: Object.assign({ step: step, min: min, max: max }, inputProps) })), !!helpText && (_jsx(FormHelperText, { children: helpText }))] })));
};
export const ValidatedCheckBox = (props) => {
    const { inputProps, required, label, helpText, hideFormFeedback } = props, rest = __rest(props, ["inputProps", "required", "label", "helpText", "hideFormFeedback"]);
    return (_jsxs(FormControl, Object.assign({ required: required, fullWidth: true, margin: "dense" }, { children: [_jsx(FormControlLabel, { control: _jsx(Checkbox, Object.assign({}, rest)), label: label }), !!helpText && (_jsx(FormHelperText, { children: helpText }))] })));
};
export const ValidatedSelect = (props) => {
    const { labelId, required, label, helpText, hideFormFeedback, children } = props, rest = __rest(props, ["labelId", "required", "label", "helpText", "hideFormFeedback", "children"]);
    return (_jsxs(FormControl, Object.assign({ required: required, fullWidth: true, margin: "dense" }, { children: [_jsx(InputLabel, Object.assign({ id: labelId }, { children: label })), _jsx(Select, Object.assign({ MenuProps: { sx: { maxHeight: 350 } }, labelId: labelId, label: label }, rest, { children: children })), !!helpText && (_jsx(FormHelperText, { children: helpText }))] })));
};
