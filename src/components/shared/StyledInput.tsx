import React from "react";
import {ValidatedInput, ValidatedInputProps} from "../framework/validatedInput";


export interface StyledInputProps extends ValidatedInputProps {
    name: string,
    model?: any,
    hintText?: string,
}


/**
 * Convenience component which creates a floating form group
 * with a validated form input
 */
export function StyledInput(props: StyledInputProps) {
    const {name, model, hintText, ...inputProps} = props;

    return (
        <ValidatedInput
            name={name}
            value={model && model[name]}
            helpText={hintText}
            {...inputProps}
        />
    );
}