import React from "react";
import {ValidateCallback} from "../../shared/pojoValidator";
import {ValidatedInput, ValidatedInputProps} from "../../framework/validatedInput";


export interface StyledInputProps extends ValidatedInputProps {
    name: string,
    validate: ValidateCallback,
    model?: any,
    hintText?: string,
}


/**
 * Convenience component which creates a floating form group
 * with a validated form input
 */
export function StyledInput(props: StyledInputProps) {
    const {name, model, validate, hintText, ...inputProps} = props;

    return (
        <ValidatedInput
            name={name}
            onBlur={() => validate(name)}
            value={model && model[name]}
            helpText={hintText}
            {...inputProps}
        />
    );
}