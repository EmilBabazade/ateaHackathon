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
import { jsx as _jsx } from "react/jsx-runtime";
import { ValidatedInput } from "../framework/validatedInput";
/**
 * Convenience component which creates a floating form group
 * with a validated form input
 */
export function StyledInput(props) {
    const { name, model, hintText } = props, inputProps = __rest(props, ["name", "model", "hintText"]);
    return (_jsx(ValidatedInput, Object.assign({ name: name, value: model && model[name], helpText: hintText }, inputProps)));
}
